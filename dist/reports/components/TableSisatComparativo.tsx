import React from "react";

/* =========================
   TIPOS
========================= */

type Nivel = "RA" | "ED" | "NE";

type Registro = {
  llave?: string;
  cct?: string;
  grado: number;
  materia: string;
  porcentaje_ra: string;
  porcentaje_ed: string;
  porcentaje_ne: string;
};

type Escuela = {
  llave?: string;
  cct: string;
  nombre: string;
  turno?: string;
  municipio?: string;
  localidad?: string;
  cct_zona?: string;
  cct_sector?: string;
  zona?: string;
  sector?: string;
  nombre_sup_zona?: string;
  nombre_sup_sector?: string;
};

type RowAgrupado = {
  llave: string;
  cct: string;
  grado: number;
  materia: string;
  nivel: Nivel;
  valor: number;
};

/* =========================
   CONFIG
========================= */

const MATERIAS = ["Lectura", "Textos", "Cálculo"];

const COLOR_MAP: Record<Nivel, string> = {
  RA: "#A71D27",
  ED: "#FACA58",
  NE: "#369445",
};

const COLOR_SECTOR = "#1a4d8c";
const COLOR_ZONA = "#517baf";

/* =========================
   HELPERS
========================= */

function normalize(val?: string) {
  return (val || "").trim().toUpperCase();
}

function matchRegistro(r: RowAgrupado, e: Escuela) {
  return (
    normalize(r.llave) === normalize(e.llave) ||
    normalize(r.cct) === normalize(e.cct)
  );
}

function getNivelMax(item: Registro): { nivel: Nivel; valor: number } {
  const niveles: Record<Nivel, number> = {
    RA: Number(item.porcentaje_ra) || 0,
    ED: Number(item.porcentaje_ed) || 0,
    NE: Number(item.porcentaje_ne) || 0,
  };

  const nivelMax = (["RA", "ED", "NE"] as Nivel[]).reduce((a, b) =>
    niveles[a] > niveles[b] ? a : b,
  );

  return { nivel: nivelMax, valor: niveles[nivelMax] };
}

function agrupar(data: Registro[]): RowAgrupado[] {
  const mapa = new Map<string, RowAgrupado>();

  data.forEach((item) => {
    const llave = item.llave ?? item.cct ?? "";
    const cct = item.cct ?? "";

    if (!llave && !cct) return;

    const key = `${llave}-${item.grado}-${item.materia}`;
    const { nivel, valor } = getNivelMax(item);

    mapa.set(key, {
      llave,
      cct,
      grado: item.grado,
      materia: item.materia,
      nivel,
      valor,
    });
  });

  return Array.from(mapa.values());
}

/* =========================
   AGRUPAR ORDENADO
========================= */

function agruparPorSectorYZona(escuelas: Escuela[]) {
  const sectores: Record<string, any> = {};

  escuelas.forEach((escuela) => {
    const sectorId = escuela.cct_sector || "SIN SECTOR";
    const zonaId = escuela.cct_zona || "SIN ZONA";

    if (!sectores[sectorId]) {
      sectores[sectorId] = {
        id: sectorId,
        numero: Number(escuela.sector) || 9999,
        nombre: `SECTOR ${escuela.sector || ""}`,
        nombre_sup: escuela.nombre_sup_sector,
        zonas: {},
      };
    }

    if (!sectores[sectorId].zonas[zonaId]) {
      sectores[sectorId].zonas[zonaId] = {
        id: zonaId,
        numero: Number(escuela.zona) || 9999,
        nombre: `ZONA ${escuela.zona || ""}`,
        nombre_sup: escuela.nombre_sup_zona,
        escuelas: [],
      };
    }

    sectores[sectorId].zonas[zonaId].escuelas.push(escuela);
  });

  return Object.values(sectores)
    .map((s: any) => ({
      ...s,
      zonas: Object.values(s.zonas).sort(
        (a: any, b: any) => a.numero - b.numero,
      ),
    }))
    .sort((a: any, b: any) => a.numero - b.numero);
}

/* =========================
   COMPONENTE
========================= */

type Props = {
  primera: Registro[];
  segunda: Registro[];
  tercera: Registro[];  // 👈 NUEVA PROPIEDAD
  dataEscuelas: Escuela[];
};

export default function SisatTablaPro({
  primera,
  segunda,
  tercera,  // 👈 NUEVO
  dataEscuelas,
}: Props) {
  const dataPrimera = agrupar(primera);
  const dataSegunda = agrupar(segunda);
  const dataTercera = agrupar(tercera);  // 👈 NUEVO
  const sectores = agruparPorSectorYZona(dataEscuelas);

  return (
    <table style={table}>
      <thead>
        <tr>
          <th style={th}>CCT</th>
          <th style={th}>Escuela</th>
          <th style={th}>Grado</th>

          {MATERIAS.map((m) => (
            <th key={m} colSpan={3} style={th}>  {/* 👈 AHORA 3 COLUMNAS */}
              {m}
            </th>
          ))}
        </tr>

        <tr>
          <th colSpan={3}></th>
          {MATERIAS.flatMap((m) => [
            <th key={`${m}-1`} style={thSmall}>
              Exp 1
            </th>,
            <th key={`${m}-2`} style={thSmall}>
              Exp 2
            </th>,
            <th key={`${m}-3`} style={thSmall}>  {/* 👈 NUEVO */}
              Exp 3
            </th>,
          ])}
        </tr>
      </thead>

      <tbody>
        {sectores.map((sector: any) => (
          <React.Fragment key={sector.id}>
            {/* SECTOR */}
            <tr>
              <td colSpan={3 + MATERIAS.length * 3} style={{ ...tdHeader, background: COLOR_SECTOR }}>  {/* 👈 MODIFICADO */}
                {sector.nombre} — {sector.nombre_sup || ""}
              </td>
            </tr>

            {sector.zonas.map((zona: any) => {
              const escuelasConDatos = zona.escuelas.filter(
                (escuela: Escuela) =>
                  dataPrimera.some((r) => matchRegistro(r, escuela)) ||
                  dataSegunda.some((r) => matchRegistro(r, escuela)) ||
                  dataTercera.some((r) => matchRegistro(r, escuela)),  // 👈 MODIFICADO
              );

              if (escuelasConDatos.length === 0) return null;

              return (
                <React.Fragment key={zona.id}>
                  {/* ZONA */}
                  <tr>
                    <td
                      colSpan={3 + MATERIAS.length * 3}  // 👈 MODIFICADO
                      style={{ ...tdHeader, background: COLOR_ZONA }}
                    >
                      {zona.nombre} — {zona.nombre_sup || ""}
                    </td>
                  </tr>

                  {escuelasConDatos.map((escuela: Escuela) => {
                    const registros = dataPrimera.filter((r) =>
                      matchRegistro(r, escuela),
                    );

                    const grados = Array.from(
                      new Set(registros.map((r) => r.grado)),
                    ).sort((a, b) => a - b);

                    return grados.map((grado, i) => (
                      <tr key={`${escuela.llave}-${grado}`}>
                        {i === 0 && (
                          <>
                            <td rowSpan={grados.length} style={tdEscuela}>
                              {escuela.cct}
                            </td>

                            <td rowSpan={grados.length} style={tdEscuela}>
                              <div style={{ fontWeight: "bold" }}>
                                {escuela.nombre}
                              </div>

                              <div style={subInfo}>
                                🕒 {escuela.turno || "S/T"} | 📍{" "}
                                {escuela.municipio || "S/M"} | 🗺️{" "}
                                {escuela.localidad || "S/L"}
                              </div>
                            </td>
                          </>
                        )}

                        <td style={td}>{grado}°</td>

                        {MATERIAS.map((m) => {
                          const p1 = dataPrimera.find(
                            (d) =>
                              matchRegistro(d, escuela) &&
                              d.grado === grado &&
                              d.materia === m,
                          );

                          const p2 = dataSegunda.find(
                            (d) =>
                              matchRegistro(d, escuela) &&
                              d.grado === grado &&
                              d.materia === m,
                          );

                          const p3 = dataTercera.find(  // 👈 NUEVO
                            (d) =>
                              matchRegistro(d, escuela) &&
                              d.grado === grado &&
                              d.materia === m,
                          );

                          return (
                            <React.Fragment key={`${m}-${grado}`}>
                              <td
                                style={{
                                  ...td,
                                  background: p1 ? COLOR_MAP[p1.nivel] : "#eee",
                                }}
                              >
                                {p1 ? `${p1.valor.toFixed(1)}%` : "N/D"}
                              </td>

                              <td
                                style={{
                                  ...td,
                                  background: p2 ? COLOR_MAP[p2.nivel] : "#eee",
                                }}
                              >
                                {p2 ? `${p2.valor.toFixed(1)}%` : "N/D"}
                              </td>

                              <td  // 👈 NUEVO
                                style={{
                                  ...td,
                                  background: p3 ? COLOR_MAP[p3.nivel] : "#eee",
                                }}
                              >
                                {p3 ? `${p3.valor.toFixed(1)}%` : "N/D"}
                              </td>
                            </React.Fragment>
                          );
                        })}
                      </tr>
                    ));
                  })}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

/* =========================
   STYLES
========================= */

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "9px",
  border: "2px solid #000",
};

const th: React.CSSProperties = {
  padding: "10px",
  border: "1px solid #000",
  background: "#f3f3f3",
};

const thSmall: React.CSSProperties = {
  padding: "6px",
  border: "1px solid #000",
  background: "#fafafa",
  fontSize: "8px",
};

const td: React.CSSProperties = {
  padding: "6px",
  border: "1px solid #ccc",
  textAlign: "center",
};

const tdHeader: React.CSSProperties = {
  padding: "12px",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "13px",
};

const tdEscuela: React.CSSProperties = {
  padding: "6px",
  border: "1px solid #ccc",
  textAlign: "center",
  verticalAlign: "middle",
  background: "#f9f9f9",
};

const subInfo: React.CSSProperties = {
  fontSize: "7px",
  marginTop: "3px",
  color: "#333",
};