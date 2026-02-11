import React from "react";

/* =========================
   TIPOS
========================= */

type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

type Escuela = {
  cct: string;
  nombre: string;
  opcion_educativa: string;
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

/* =========================
   COMPONENTE FINAL
========================= */

type Props = {
  dataMapaZona: Escuela[];
  dataZona: RegistroZona[];
};

export function TablePorEscuela({ dataMapaZona, dataZona }: Props) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "8.5px",
      }}
    >
      <thead>
        <tr>
          <th>CCT</th>
          <th>Escuela</th>
          <th>Grado</th>
          {CAMPOS_FORMATIVOS.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dataMapaZona.map((escuela) => {
          const registrosEscuela = dataZona.filter(
            (r) => r.cct === escuela.cct,
          );

          const sinDatos = registrosEscuela.length === 0;
          const grados = getGradosPorOpcion(escuela.opcion_educativa);

          return grados.map((grado, i) => (
            <tr
              key={`${escuela.cct}-${grado}`}
              style={{
                backgroundColor: sinDatos ? COLOR_SIN_DATOS : "transparent",
              }}
            >
              {i === 0 && (
                <td rowSpan={grados.length} style={{ fontWeight: 600 }}>
                  {escuela.cct}
                  {sinDatos && (
                    <div style={{ fontSize: "7px", fontStyle: "italic" }}>
                      Sin datos
                    </div>
                  )}
                </td>
              )}
              {/* ESCUELA */}
              {i === 0 && (
                <td rowSpan={grados.length} style={{ fontWeight: 600 }}>
                  {escuela.nombre}
                  {sinDatos && (
                    <div style={{ fontSize: "7px", fontStyle: "italic" }}>
                      Sin datos
                    </div>
                  )}
                </td>
              )}

              {/* GRADO */}
              <td style={{ textAlign: "center" }}>{grado}°</td>

              {/* CAMPOS FORMATIVOS */}
              {CAMPOS_FORMATIVOS.map((campo) => {
                if (sinDatos) {
                  return (
                    <td key={campo} style={{ textAlign: "center" }}>
                      —
                    </td>
                  );
                }

                const registros = registrosEscuela.filter(
                  (r) => r.grado === grado && r.campo_formativo === campo,
                );

                if (registros.length === 0) {
                  return (
                    <td key={campo} style={{ textAlign: "center" }}>
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
                    }}
                  >
                    {mejor.porcentaje}%
                  </td>
                );
              })}
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
}
