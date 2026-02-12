import React from "react";

/* =========================
   TIPOS
========================= */

type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

type Escuela = {
  cct: string;
  nombre: string;
  opcion_educativa: string;
  cct_zona?: string;
  nivel?: string;
  subnivel?: string;
  zona?: number;
};

type RegistroZona = {
  cct: string;
  grado: number;
  campo_formativo: string;
  nivel_integracion: NivelIntegracion;
  porcentaje: string;
};

/* =========================
   CONSTANTES
========================= */

const CAMPOS_FORMATIVOS = [
  "Lenguajes",
  "De lo humano y lo comunitario",
  "Ética, naturaleza y sociedades",
  "Saberes y pensamiento científico",
];

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#369445",
  EPD: "#FACA58",
  RA: "#F38C2D",
  SE: "#A71D27",
};

const COLOR_SIN_DATOS = "#E0E0E0";

// 🎨 Tonos de gris para identificar escuelas - VERSIÓN TYPE SAFE 100%
const GRISES_ESCUELAS = {
  GRIS_0: "#F8F8F8", // Gris muy claro
  GRIS_1: "#F0F0F0", // Gris claro
  GRIS_2: "#E8E8E8", // Gris medio claro
  GRIS_3: "#E0E0E0", // Gris medio
  GRIS_4: "#D8D8D8", // Gris medio oscuro
  GRIS_5: "#D0D0D0", // Gris oscuro
} as const;

// Array de colores para iterar fácilmente
const GRISES_ARRAY = [
  GRISES_ESCUELAS.GRIS_0,
  GRISES_ESCUELAS.GRIS_1,
  GRISES_ESCUELAS.GRIS_2,
  GRISES_ESCUELAS.GRIS_3,
  GRISES_ESCUELAS.GRIS_4,
  GRISES_ESCUELAS.GRIS_5,
];

// Configuración: solo 2 repeticiones
const SEGUNDA_REPETICION: Record<string, number> = {
  primaria: 3, // Grado 4 (índice 3)
  secundaria: 1, // Grado 2 (índice 1)
  preescolar: 0, // No aplica
};

/* =========================
   UTILIDADES
========================= */

function getGradosPorOpcion(opcion: string): number[] {
  const op = opcion.toLowerCase();
  if (op.includes("preescolar")) return [3];
  if (op.includes("primaria")) return [1, 2, 3, 4, 5, 6];
  if (op.includes("secundaria")) return [1, 2, 3];
  return [];
}

function getTipoEscuela(opcion: string): string {
  const op = opcion.toLowerCase();
  if (op.includes("preescolar")) return "preescolar";
  if (op.includes("primaria")) return "primaria";
  if (op.includes("secundaria")) return "secundaria";
  return "primaria";
}

function cutOneDecimal(value: number): string {
  return (Math.floor(value * 10) / 10).toFixed(1);
}

// 🎨 Generar color gris basado en el CCT - ¡SIN ERRORES DE TYPESCRIPT!
function getColorEscuela(cct: string): string {
  // Validación segura
  if (!cct || cct.trim() === "") {
    return GRISES_ESCUELAS.GRIS_0;
  }

  // Generar hash del CCT (algoritmo mejorado)
  let hash = 0;
  for (let i = 0; i < cct.length; i++) {
    hash = (hash << 5) - hash + cct.charCodeAt(i);
    hash = hash & hash; // Convertir a 32-bit integer
  }

  // Asegurar índice positivo
  const colorIndex = Math.abs(hash) % GRISES_ARRAY.length;

  // Switch statement - 100% type safe
  switch (colorIndex) {
    case 0:
      return GRISES_ESCUELAS.GRIS_0;
    case 1:
      return GRISES_ESCUELAS.GRIS_1;
    case 2:
      return GRISES_ESCUELAS.GRIS_2;
    case 3:
      return GRISES_ESCUELAS.GRIS_3;
    case 4:
      return GRISES_ESCUELAS.GRIS_4;
    case 5:
      return GRISES_ESCUELAS.GRIS_5;
    default:
      return GRISES_ESCUELAS.GRIS_0;
  }
}

/* =========================
   COMPONENTE
========================= */

type Props = {
  dataMapaZona: Escuela[];
  dataZona: RegistroZona[];
  agruparPorZona?: boolean;
};

export function TablePorEscuela({
  dataMapaZona,
  dataZona,
  agruparPorZona = false,
}: Props) {
  /* =========================
     AGRUPAR PARA SECTOR
  ========================= */

  const agrupado: Record<string, Escuela[]> = {};

  if (agruparPorZona) {
    dataMapaZona.forEach((escuela) => {
      const zona = escuela.cct_zona ?? "Sin zona";

      if (!agrupado[zona]) {
        agrupado[zona] = [];
      }

      agrupado[zona].push(escuela);
    });
  }

  const renderEscuela = (escuela: Escuela) => {
    const registrosEscuela = dataZona.filter((r) => r.cct === escuela.cct);
    const sinDatos = registrosEscuela.length === 0;
    const grados = getGradosPorOpcion(escuela.opcion_educativa);
    const tipoEscuela = getTipoEscuela(escuela.opcion_educativa);
    const esPreescolar = grados.length === 1;

    // 🎨 Color gris para esta escuela (consistente por CCT)
    const colorEscuela = getColorEscuela(escuela.cct);

    // Índice para segunda repetición
    const indiceSegundaRepeticion = SEGUNDA_REPETICION[tipoEscuela] ?? 3;

    return grados.map((grado, index) => {
      // Mostrar CCT y nombre SOLO en las 2 repeticiones
      const debeMostrarCCTyNombre =
        index === 0 || index === indiceSegundaRepeticion;

      // Calcular rowSpan
      let rowSpan = 1;
      if (debeMostrarCCTyNombre && !esPreescolar) {
        if (index === 0) {
          rowSpan = indiceSegundaRepeticion;
        } else {
          rowSpan = grados.length - index;
        }
      }

      // Estilo de borde superior para la primera fila de la escuela
      const borderTopStyle = index === 0 ? "2px solid #333" : "1px solid #ccc";

      // Estilo de borde inferior para la última fila de la escuela
      const borderBottomStyle =
        index === grados.length - 1 ? "2px solid #333" : "1px solid #ccc";

      return (
        <tr
          key={`${escuela.cct}-${grado}`}
          style={{
            backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
            borderTop: borderTopStyle,
            borderBottom: borderBottomStyle,
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
            pageBreakInside: "avoid",
          }}
        >
          {/* CCT - Solo en las 2 repeticiones */}
          {debeMostrarCCTyNombre || esPreescolar ? (
            <td
              rowSpan={!esPreescolar ? rowSpan : 1}
              style={{
                fontWeight: 600,
                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                padding: "8px 4px",
                fontSize: "8.5px",
                verticalAlign: "top",
                borderRight: "2px solid #333",
              }}
            >
              {escuela.cct}
            </td>
          ) : null}

          {/* Nombre - Solo en las 2 repeticiones */}
          {debeMostrarCCTyNombre || esPreescolar ? (
            <td
              rowSpan={!esPreescolar ? rowSpan : 1}
              style={{
                fontWeight: 600,
                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                padding: "8px 4px",
                fontSize: "8.5px",
                verticalAlign: "top",
                borderRight: "2px solid #333",
                textAlign: "left",
              }}
            >
              <div>{escuela.nombre}</div>
              {index === 0 && (
                <div
                  style={{
                    fontSize: "7px",
                    color: "#555",
                    marginTop: "2px",
                    fontStyle: "italic",
                  }}
                ></div>
              )}
            </td>
          ) : null}

          {/* Grado - Siempre visible */}
          <td
            style={{
              textAlign: "center",
              fontWeight: 600,
              padding: "8px 4px",
              fontSize: "8.5px",
              backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
            }}
          >
            {grado}°
          </td>

          {/* Campos formativos - Siempre visibles */}
          {CAMPOS_FORMATIVOS.map((campo) => {
            if (sinDatos) {
              return (
                <td
                  key={campo}
                  style={{
                    textAlign: "center",
                    padding: "8px 4px",
                    fontSize: "8.5px",
                    backgroundColor: colorEscuela,
                  }}
                >
                  —
                </td>
              );
            }

            const registros = registrosEscuela.filter(
              (r) => r.grado === grado && r.campo_formativo === campo,
            );

            if (registros.length === 0) {
              return (
                <td
                  key={campo}
                  style={{
                    textAlign: "center",
                    padding: "8px 4px",
                    fontSize: "8.5px",
                    backgroundColor: colorEscuela,
                  }}
                >
                  —
                </td>
              );
            }

            const mejor = registros.reduce((max, curr) =>
              Number(curr.porcentaje) > Number(max.porcentaje) ? curr : max,
            );

            return (
              <td
                key={campo}
                style={{
                  textAlign: "center",
                  backgroundColor: COLOR_MAP[mejor.nivel_integracion],
                  fontWeight: 600,
                  color: "#000",
                  padding: "8px 4px",
                  fontSize: "8.5px",
                  border: "1px solid #666",
                }}
              >
                {cutOneDecimal(Number(mejor.porcentaje))}%
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "8.5px",
        border: "2px solid #000",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              width: "10%",
              padding: "10px 4px",
              backgroundColor: "#f3f3f3",
              borderBottom: "2px solid #000",
              borderRight: "2px solid #000",
            }}
          >
            CCT
          </th>
          <th
            style={{
              width: "25%",
              padding: "10px 4px",
              backgroundColor: "#f3f3f3",
              borderBottom: "2px solid #000",
              borderRight: "2px solid #000",
            }}
          >
            Escuela
          </th>
          <th
            style={{
              width: "5%",
              padding: "10px 4px",
              backgroundColor: "#f3f3f3",
              borderBottom: "2px solid #000",
              borderRight: "1px solid #ccc",
            }}
          >
            Grado
          </th>
          {CAMPOS_FORMATIVOS.map((c, i) => (
            <th
              key={c}
              style={{
                width: "15%",
                padding: "10px 4px",
                backgroundColor: "#f3f3f3",
                borderBottom: "2px solid #000",
                borderRight:
                  i === CAMPOS_FORMATIVOS.length - 1
                    ? "2px solid #000"
                    : "1px solid #ccc",
              }}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {agruparPorZona
          ? Object.keys(agrupado)
              .sort((a, b) => {
                const zonaA = Number(agrupado[a]?.[0]?.zona ?? 0);
                const zonaB = Number(agrupado[b]?.[0]?.zona ?? 0);
                return zonaA - zonaB;
              })
              .map((zona) => (
                <React.Fragment key={zona}>
                  {/* Cabecera de zona */}
                  <tr>
                    <td
                      colSpan={3 + CAMPOS_FORMATIVOS.length}
                      style={{
                        backgroundColor: "#3c4a58",
                        fontWeight: 600,
                        fontSize: "13px",
                        padding: "15px 16px",
                        borderTop: "3px solid #000",
                        borderBottom: "2px solid #000",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          gap: "20px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          Zona: <strong>{zona}</strong>
                        </div>
                        <div>
                          Nivel:{" "}
                          <strong>
                            {agrupado[zona]?.[0]?.nivel ?? "Sin nivel"}
                          </strong>
                        </div>
                        <div>
                          Subnivel:{" "}
                          <strong>
                            {agrupado[zona]?.[0]?.subnivel ?? "Sin opción"}
                          </strong>
                        </div>
                        <div>
                          No. Zona:{" "}
                          <strong>
                            {agrupado[zona]?.[0]?.zona ?? "Sin número"}
                          </strong>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Escuelas de la zona */}
                  {agrupado[zona]!.map((escuela) => renderEscuela(escuela))}
                </React.Fragment>
              ))
          : dataMapaZona.map((escuela) => renderEscuela(escuela))}
      </tbody>
    </table>
  );
}
