import React from "react";

/* =========================
   TIPOS
========================= */

type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

type Escuela = {
  llave: string;
  cct: string;
  nombre: string;
  opcion_educativa: string;
  cct_zona?: string;
  cct_sector?: string;
  nivel?: string;
  subnivel?: string;
  zona?: number;
  sector?: number;
  nombre_sup_zona?: string;
  nombre_sup_sector?: string;
  turno?: string;
  municipio?: string;
};

type RegistroZona = {
  llave: string;
  cct: string;
  grado: number;
  campo_formativo: string;
  nivel_integracion: NivelIntegracion;
  porcentaje: string;
  nombre_sup_zona?: string;
  nombre_sup_sector?: string;
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

const GRISES_ESCUELAS = {
  GRIS_0: "#F8F8F8",
  GRIS_1: "#F0F0F0",
  GRIS_2: "#E8E8E8",
  GRIS_3: "#E0E0E0",
  GRIS_4: "#D8D8D8",
  GRIS_5: "#D0D0D0",
} as const;

const GRISES_ARRAY = [
  GRISES_ESCUELAS.GRIS_0,
  GRISES_ESCUELAS.GRIS_1,
  GRISES_ESCUELAS.GRIS_2,
  GRISES_ESCUELAS.GRIS_3,
  GRISES_ESCUELAS.GRIS_4,
  GRISES_ESCUELAS.GRIS_5,
];

const SEGUNDA_REPETICION: Record<string, number> = {
  primaria: 3,
  secundaria: 1,
  preescolar: 0,
};

// Colores para sectores y zonas
const COLORES_SECTOR = [
  "#1a4d8c", // Azul oscuro
];

const COLORES_ZONA = [
  "#517baf", // Azul muy claro
];

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

function getColorEscuela(cct: string): string {
  if (!cct || cct.trim() === "") {
    return GRISES_ESCUELAS.GRIS_0;
  }

  let hash = 0;
  for (let i = 0; i < cct.length; i++) {
    hash = (hash << 5) - hash + cct.charCodeAt(i);
    hash = hash & hash;
  }

  const colorIndex = Math.abs(hash) % GRISES_ARRAY.length;

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

function getColorSector(index: number): string {
  return COLORES_SECTOR[index % COLORES_SECTOR.length] || "#4a4a4a";
}

function getColorZona(index: number): string {
  return COLORES_ZONA[index % COLORES_ZONA.length] || "#f0f0f0";
}

/* =========================
   FUNCIONES DE AGRUPACIÓN
========================= */

// Agrupar primero por sector, luego por zona
function agruparPorSectorYZona(escuelas: Escuela[]) {
  const sectores: Record<string, any> = {};

  escuelas.forEach((escuela) => {
    const sectorId = escuela.cct_sector ?? "SIN SECTOR";
    const zonaId = escuela.cct_zona ?? "Sin zona";

    // Inicializar sector si no existe
    if (!sectores[sectorId]) {
      sectores[sectorId] = {
        id: sectorId,
        nombre:
          sectorId === "SIN SECTOR"
            ? "SIN SECTOR ASIGNADO"
            : `SECTOR ${sectorId}`,
        numero: escuela.sector,
        nombre_sup: escuela.nombre_sup_sector,
        zonas: {},
      };
    }

    // Inicializar zona si no existe dentro del sector
    if (!sectores[sectorId].zonas[zonaId]) {
      sectores[sectorId].zonas[zonaId] = {
        id: zonaId,
        nombre: zonaId === "Sin zona" ? "SIN ZONA ASIGNADA" : `ZONA ${zonaId}`,
        numero: escuela.zona,
        nombre_sup: escuela.nombre_sup_zona,
        escuelas: [],
      };
    }

    // Agregar escuela a la zona
    sectores[sectorId].zonas[zonaId].escuelas.push(escuela);
  });

  // Convertir a array y ordenar
  return Object.values(sectores)
    .map((sector: any) => ({
      ...sector,
      zonas: Object.values(sector.zonas).sort(
        (a: any, b: any) => (a.numero || 0) - (b.numero || 0),
      ),
    }))
    .sort((a: any, b: any) => (a.numero || 0) - (b.numero || 0));
}

/* =========================
   COMPONENTE
========================= */

type Props = {
  dataMapaZona: Escuela[];
  dataZona: RegistroZona[];
  agruparPorZona?: boolean;
  agruparPorSector?: boolean;
};

export function TablePorEscuela({
  dataMapaZona,
  dataZona,
  agruparPorZona = false,
  agruparPorSector = false,
}: Props) {
  // HEADER COMÚN PARA TODAS LAS VISTAS
  const tableHeader = (
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
              alignItems: "center",
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
  );

  // Si es agrupación por sector
  if (agruparPorSector) {
    const sectores = agruparPorSectorYZona(dataMapaZona);

    return (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "8.5px",
          border: "2px solid #000",
        }}
      >
        {tableHeader}
        <tbody>
          {sectores.map((sector: any, sectorIndex: number) => (
            <React.Fragment key={sector.id}>
              {/* Cabecera de SECTOR */}
              <tr>
                <td
                  colSpan={3 + CAMPOS_FORMATIVOS.length}
                  style={{
                    backgroundColor: getColorSector(sectorIndex),
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "15px 16px",
                    borderTop:
                      sectorIndex === 0 ? "3px solid #000" : "3px solid #333",
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
                      <strong>{sector.nombre}</strong>
                    </div>
                    <div>
                      JEFE DE SECTOR:{" "}
                      <strong>{sector.nombre_sup || "NO ASIGNADO"}</strong>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Zonas del sector */}
              {sector.zonas.map((zona: any, zonaIndex: number) => (
                <React.Fragment key={zona.id}>
                  {/* Cabecera de ZONA */}
                  <tr>
                    <td
                      colSpan={3 + CAMPOS_FORMATIVOS.length}
                      style={{
                        backgroundColor: getColorZona(zonaIndex),
                        fontWeight: 600,
                        fontSize: "13px",
                        padding: "12px 16px",
                        borderTop:
                          zonaIndex === 0 ? "2px solid #666" : "2px solid #999",
                        borderBottom: "2px solid #333",
                        color: "#000",
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
                          NO. ZONA:{" "}
                          <strong>{zona.numero ?? "Sin número"}</strong>
                        </div>

                        <div>
                          <strong>{zona.nombre}</strong>
                        </div>

                        <div>
                          SUPERVISOR:{" "}
                          <strong>{zona.nombre_sup || "NO ASIGNADO"}</strong>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Escuelas de la zona */}
                  {zona.escuelas.map((escuela: Escuela) =>
                    renderEscuela(escuela, dataZona),
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }

  // Si es agrupación por zona
  if (agruparPorZona) {
    const agrupado: Record<string, Escuela[]> = {};

    dataMapaZona.forEach((escuela) => {
      const zona = escuela.cct_zona ?? "Sin zona";
      if (!agrupado[zona]) agrupado[zona] = [];
      agrupado[zona].push(escuela);
    });

    const zonasOrdenadas = Object.keys(agrupado).sort((a, b) => {
      const zonaA = Number(agrupado[a]?.[0]?.zona ?? 0);
      const zonaB = Number(agrupado[b]?.[0]?.zona ?? 0);
      return zonaA - zonaB;
    });

    return (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "8.5px",
          border: "2px solid #000",
        }}
      >
        {tableHeader}
        <tbody>
          {zonasOrdenadas.map((zona) => (
            <React.Fragment key={zona}>
              {/* Cabecera de ZONA */}
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
                      JEFE ZONA:{" "}
                      <strong>
                        {agrupado[zona]?.[0]?.nombre_sup_zona ?? "NO ASIGNADO"}
                      </strong>
                    </div>
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
              {agrupado[zona]!.map((escuela) =>
                renderEscuela(escuela, dataZona),
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }

  // Sin agrupación
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "8.5px",
        border: "2px solid #000",
      }}
    >
      {tableHeader}
      <tbody>
        {dataMapaZona.map((escuela) => renderEscuela(escuela, dataZona))}
      </tbody>
    </table>
  );
}

// Función auxiliar para renderizar una escuela
function renderEscuela(escuela: Escuela, dataZona: RegistroZona[]) {
  const registrosEscuela = dataZona.filter((r) => r.llave === escuela.llave);
  const sinDatos = registrosEscuela.length === 0;
  const grados = getGradosPorOpcion(escuela.opcion_educativa);
  const tipoEscuela = getTipoEscuela(escuela.opcion_educativa);
  const esPreescolar = grados.length === 1;

  const colorEscuela = getColorEscuela(escuela.cct);

  // Para primaria: usar el valor de SEGUNDA_REPETICION (3)
  // Para secundaria y preescolar: no queremos repetición
  const indiceSegundaRepeticion =
    tipoEscuela === "primaria"
      ? (SEGUNDA_REPETICION[tipoEscuela] ?? 3)
      : grados.length; // Un índice que nunca alcanzaremos

  return grados.map((grado, index) => {
    // Solo mostrar CCT/nombre en:
    // - Primaria: índice 0 y índice de segunda repetición
    // - Secundaria y Preescolar: solo índice 0
    const debeMostrarCCTyNombre =
      tipoEscuela === "primaria"
        ? index === 0 || index === indiceSegundaRepeticion
        : index === 0;

    let rowSpan = 1;
    if (debeMostrarCCTyNombre && !esPreescolar) {
      if (index === 0) {
        rowSpan = indiceSegundaRepeticion;
      } else {
        rowSpan = grados.length - index;
      }
    }

    const borderTopStyle = index === 0 ? "2px solid #333" : "1px solid #ccc";
    const borderBottomStyle =
      index === grados.length - 1 ? "2px solid #333" : "1px solid #ccc";

    // Estilo para centrar verticalmente el contenido de las celdas
    const cellStyle = {
      textAlign: "center" as const,
      verticalAlign: "middle" as const,
      justifyContent: "center" as const,
      padding: "8px 4px",
      fontSize: "8.5px",
    };

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
        {debeMostrarCCTyNombre ? (
          <>
            <td
              rowSpan={!esPreescolar ? rowSpan : 1}
              style={{
                ...cellStyle,
                fontWeight: 600,
                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                borderRight: "2px solid #333",
              }}
            >
              {escuela.cct}
            </td>
            <td
              rowSpan={!esPreescolar ? rowSpan : 1}
              style={{
                ...cellStyle,
                fontWeight: 600,
                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                borderRight: "2px solid #333",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
                {escuela.nombre}
              </div>
              <div style={{ fontSize: "7px", color: "#333", marginTop: "2px" }}>
                <span style={{ display: "inline-block", marginRight: "8px" }}>
                  🏫 Turno: <strong>{escuela.turno || "S/T"}</strong>
                </span>
                <span style={{ display: "inline-block" }}>
                  📍Municipio: <strong>{escuela.municipio || "S/M"}</strong>
                </span>
              </div>
            </td>
          </>
        ) : null}

        <td
          style={{
            ...cellStyle,
            fontWeight: 600,
            backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
          }}
        >
          {grado}°
        </td>

        {CAMPOS_FORMATIVOS.map((campo) => {
          if (sinDatos) {
            return (
              <td
                key={campo}
                style={{
                  ...cellStyle,
                  backgroundColor: colorEscuela,
                }}
              >
                N/D
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
                  ...cellStyle,
                  backgroundColor: colorEscuela,
                }}
              >
                N/D
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
                ...cellStyle,
                backgroundColor: COLOR_MAP[mejor.nivel_integracion],
                fontWeight: 600,
                color: "#000",
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
}
