import React from "react";

// Tipos basados en tu JSON
export type DatosReporte = {
  id: number;
  cct: string;
  llave: string;
  cct_sector: string;
  cct_zona: string;
  turno: string;
  opcion_educativa: string;
  grado: number;
  nivel: string;
  tipo: string;
  campo_formativo: string;
  nivel_integracion: "AD" | "EPD" | "RA" | "SE";
  numero_alumnos: number;
  total_cct_grado: number;
  porcentaje: string;
};

type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

const NIVELES_BAJOS: NivelIntegracion[] = ["RA", "SE"];

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#5FB3A2",
  EPD: "#E6C44A",
  RA: "#E09A5C",
  SE: "#D96C6C",
};

type AtencionRow = {
  grado: number;
  campo_formativo: string;
  valores: Record<
    NivelIntegracion,
    {
      porcentaje: number;
      alumnos: number;
    }
  >;
  total_alumnos: number;
};

type TablaAtencionProps = {
  data: DatosReporte[];
  umbral?: number;
  showHeader?: boolean;
  pageInfo?: {
    current: number;
    total: number;
    totalAreas?: number;
  };
};

export function TablaRequiereAtencion({
  data,
  umbral = 30,
  showHeader = true,
  pageInfo,
}: TablaAtencionProps) {
  const procesarDatos = (): AtencionRow[] => {
    const mapa = new Map<string, AtencionRow>();

    data.forEach((item) => {
      const key = `${item.grado}-${item.campo_formativo}`;

      if (!mapa.has(key)) {
        // Crear entrada nueva con todos los valores en 0
        const nuevosValores: Record<
          NivelIntegracion,
          { porcentaje: number; alumnos: number }
        > = {
          AD: { porcentaje: 0, alumnos: 0 },
          EPD: { porcentaje: 0, alumnos: 0 },
          RA: { porcentaje: 0, alumnos: 0 },
          SE: { porcentaje: 0, alumnos: 0 },
        };

        mapa.set(key, {
          grado: item.grado,
          campo_formativo: item.campo_formativo,
          valores: nuevosValores,
          total_alumnos: item.total_cct_grado,
        });
      }

      const row = mapa.get(key)!;
      const porcentajeNum = parseFloat(item.porcentaje) || 0;
      const alumnosEnNivel =
        Math.round((porcentajeNum / 100) * item.total_cct_grado) || 0;

      row.valores[item.nivel_integracion] = {
        porcentaje: porcentajeNum,
        alumnos: alumnosEnNivel,
      };
    });

    // Convertir Map a array, filtrar y ordenar
    return Array.from(mapa.values())
      .filter(
        (row) =>
          row.valores.RA.porcentaje >= umbral ||
          row.valores.SE.porcentaje >= umbral,
      )
      .sort((a, b) => {
        if (a.grado !== b.grado) return a.grado - b.grado;
        return a.campo_formativo.localeCompare(b.campo_formativo);
      });
  };

  const rows = procesarDatos();

  if (rows.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: 0,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          color: "#4CAF50",
          padding: "20px",
        }}
      >
        <p style={{ textAlign: "center", fontSize: "16px" }}>
          <strong
            style={{ fontSize: "25px", display: "block", marginBottom: "10px" }}
          >
            ✅
          </strong>
          No se detectaron áreas que requieran atención prioritaria
        </p>
      </div>
    );
  }

  // Calcular totales para el footer
  const totalAlumnosEnRiesgo = rows.reduce((sum, row) => {
    return sum + row.valores.RA.alumnos + row.valores.SE.alumnos;
  }, 0);

  const totalAlumnosGeneral = rows.reduce((sum, row) => {
    return sum + row.total_alumnos;
  }, 0);

  const promedioRiesgo =
    totalAlumnosGeneral > 0
      ? ((totalAlumnosEnRiesgo / totalAlumnosGeneral) * 100).toFixed(1)
      : "0";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      {showHeader && (
        <div style={{ textAlign: "center", margin: "0 0 15px 0" }}>
          <strong style={{ fontSize: "25px", display: "block" }}>⚠️</strong>
          <span style={{ fontSize: "14px", color: "#666" }}>
            Campos formativos con niveles RA/SE superiores al {umbral}%
          </span>
          <div
            style={{
              fontSize: "13px",
              color: "#555",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          ></div>
        </div>
      )}

      <div style={{ overflowY: "auto", flex: 1 }}>
        <table
          className="report-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Grado
              </th>
              <th
                style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Campo Formativo
              </th>
              {NIVELES_BAJOS.map((nivel) => (
                <th
                  key={nivel}
                  colSpan={2}
                  style={{
                    padding: "10px 4px",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    backgroundColor: COLOR_MAP[nivel] + "22",
                  }}
                >
                  {nivel}
                </th>
              ))}
              <th
                style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Total
              </th>
            </tr>
            <tr>
              <th
                style={{ padding: "5px 8px", borderBottom: "1px solid #ddd" }}
              ></th>
              <th
                style={{ padding: "5px 8px", borderBottom: "1px solid #ddd" }}
              ></th>
              {NIVELES_BAJOS.map((nivel) => (
                <React.Fragment key={`sub-${nivel}`}>
                  <th
                    style={{
                      padding: "5px 4px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    %
                  </th>
                  <th
                    style={{
                      padding: "5px 4px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Alumnos
                  </th>
                </React.Fragment>
              ))}
              <th
                style={{
                  padding: "5px 8px",
                  borderBottom: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Alumnos
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => {
              const key = `${row.grado}-${row.campo_formativo}-${index}`;
              const alumnosEnRiesgoRow =
                row.valores.RA.alumnos + row.valores.SE.alumnos;
              const porcentajeRiesgoRow = (
                (alumnosEnRiesgoRow / row.total_alumnos) *
                100
              ).toFixed(1);

              return (
                <tr key={key}>
                  <td
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      borderBottom: "1px solid #eee",
                      textAlign: "center",
                    }}
                  >
                    {row.grado}°
                  </td>

                  <td
                    style={{
                      padding: "8px",
                      maxWidth: "200px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {row.campo_formativo}
                  </td>

                  {NIVELES_BAJOS.map((nivel) => (
                    <React.Fragment key={`${key}-${nivel}`}>
                      <td
                        style={{
                          padding: "8px 4px",
                          textAlign: "center",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            padding: "4px 6px",
                            borderRadius: "12px",
                            backgroundColor: COLOR_MAP[nivel],
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight:
                              row.valores[nivel].porcentaje >= umbral
                                ? "bold"
                                : "normal",
                          }}
                        >
                          {row.valores[nivel].porcentaje.toFixed(1)}%
                        </span>
                      </td>
                      <td
                        style={{
                          padding: "8px 4px",
                          textAlign: "center",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <span style={{ fontSize: "12px", color: "#555" }}>
                          {row.valores[nivel].alumnos}
                        </span>
                      </td>
                    </React.Fragment>
                  ))}

                  <td
                    style={{
                      padding: "8px",
                      textAlign: "center",
                      borderBottom: "1px solid #eee",
                      fontWeight: "bold",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    {row.total_alumnos}
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: alumnosEnRiesgoRow > 0 ? "#D96C6C" : "#666",
                        fontWeight: "normal",
                      }}
                    ></span>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td
                colSpan={10}
                style={{
                  padding: "8px",
                  fontSize: "12px",
                  color: "#666",
                  textAlign: "center",
                  borderTop: "1px solid #ddd",
                  backgroundColor: "#f9f9f9",
                }}
              >
                Total de campos formativos con NI bajo:{" "}
                {pageInfo?.totalAreas || rows.length}
                {pageInfo &&
                  ` (Página ${pageInfo.current} de ${pageInfo.total})`}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
