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
  valores: Record<NivelIntegracion, number>;
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
      // Solo procesar RA y SE
      if (item.nivel_integracion === "RA" || item.nivel_integracion === "SE") {
        const key = `${item.grado}-${item.campo_formativo}`;

        if (!mapa.has(key)) {
          // Crear entrada nueva con todos los valores en 0
          const nuevosValores: Record<NivelIntegracion, number> = {
            AD: 0,
            EPD: 0,
            RA: 0,
            SE: 0,
          };

          mapa.set(key, {
            grado: item.grado,
            campo_formativo: item.campo_formativo,
            valores: nuevosValores,
            total_alumnos: item.total_cct_grado,
          });
        }

        const row = mapa.get(key)!;
        // Convertir porcentaje de string a número
        row.valores[item.nivel_integracion] = parseFloat(item.porcentaje) || 0;
      }
    });

    // Convertir Map a array, filtrar y ordenar
    return Array.from(mapa.values())
      .filter((row) => row.valores.RA >= umbral || row.valores.SE >= umbral)
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
        <p style={{ textAlign: "center", margin: "0 0 10px 0" }}>
          <strong style={{ fontSize: "25px", display: "block" }}>⚠️</strong>
          <span style={{ fontSize: "14px", color: "#666" }}>
            Campos formativos con niveles RA/SE superiores al {umbral}%
          </span>
        </p>
      )}

      <div style={{ overflowY: "auto", flex: 1 }}>
        <table
          className="report-table"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Grado
              </th>
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Campo Formativo
              </th>
              {NIVELES_BAJOS.map((nivel) => (
                <th
                  key={nivel}
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  {nivel}
                </th>
              ))}
              <th
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Total Alumnos
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => {
              const key = `${row.grado}-${row.campo_formativo}-${index}`;

              return (
                <tr key={key}>
                  <td
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      borderBottom: "1px solid #eee",
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
                    <td
                      key={nivel}
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          backgroundColor: COLOR_MAP[nivel],
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight:
                            row.valores[nivel] >= umbral ? "bold" : "normal",
                        }}
                      >
                        {row.valores[nivel].toFixed(1)}%
                      </span>
                    </td>
                  ))}

                  <td
                    style={{
                      padding: "8px",
                      textAlign: "center",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {row.total_alumnos}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={5}
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
