import BarChartSmall from "./BarChartSmall";

/* =========================
   CONFIG
========================= */

const MATERIAS = ["Lectura", "Textos", "Cálculo"];

const COLOR_MAP = {
  RA: "#A71D27",
  ED: "#FACA58",
  NE: "#369445",
};

/* =========================
   LÓGICA
========================= */

function agruparDatosSisat(data: any[]) {
  const mapa = new Map();

  data.forEach((item) => {
    const key = `${item.materia}-${item.grado}`;

    if (!mapa.has(key)) {
      mapa.set(key, {
        materia: item.materia,
        grado: String(item.grado),
        totalRA: 0,
        totalED: 0,
        totalNE: 0,
      });
    }

    const row = mapa.get(key);

    row.totalRA += Number(item.total_ra) || 0;
    row.totalED += Number(item.total_ed) || 0;
    row.totalNE += Number(item.total_ne) || 0;
  });

  return Array.from(mapa.values());
}

function buildSisatPorMateria(data: any[], materia: string) {
  const agrupados = agruparDatosSisat(data).filter(
    (d) => d.materia === materia,
  );

  const grados = Array.from(new Set(agrupados.map((d) => d.grado))).sort(
    (a, b) => Number(a) - Number(b),
  );

  const RA: number[] = [];
  const ED: number[] = [];
  const NE: number[] = [];

  grados.forEach((grado) => {
    const row = agrupados.find((d) => d.grado === grado);

    if (!row) {
      RA.push(0);
      ED.push(0);
      NE.push(0);
      return;
    }

    const total = row.totalRA + row.totalED + row.totalNE;

    RA.push(total ? (row.totalRA / total) * 100 : 0);
    ED.push(total ? (row.totalED / total) * 100 : 0);
    NE.push(total ? (row.totalNE / total) * 100 : 0);
  });

  return {
    grados,
    segments: [
      { label: "RA", color: COLOR_MAP.RA, values: RA },
      { label: "ED", color: COLOR_MAP.ED, values: ED },
      { label: "NE", color: COLOR_MAP.NE, values: NE },
    ],
  };
}

/* =========================
   🔥 COMPONENTE FINAL CON 3 EXPLORACIONES
========================= */

type Props = {
  primera: any[];
  segunda: any[];
  tercera: any[];
};

export default function SisatComparativoCharts({ primera, segunda, tercera }: Props) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {MATERIAS.map((materia) => {
        const dataPrimera = buildSisatPorMateria(primera, materia);
        const dataSegunda = buildSisatPorMateria(segunda, materia);
        const dataTercera = buildSisatPorMateria(tercera, materia);

        // Si no hay datos en ninguna exploración, no mostrar
        if (!dataPrimera.grados.length && !dataSegunda.grados.length && !dataTercera.grados.length)
          return null;

        return (
          <div
            key={materia}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* TITULO */}
            <h4
              style={{
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {materia}
            </h4>

            {/* CONTENEDOR CENTRADO */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "8mm",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* PRIMERA */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "9px", marginBottom: "2mm", fontWeight: "bold" }}>
                    Primera Exploración
                  </p>
                  <BarChartSmall
                    labels={dataPrimera.grados}
                    segments={[...dataPrimera.segments]}
                    width={320}
                    height={180}
                  />
                </div>

                {/* SEGUNDA */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "9px", marginBottom: "2mm", fontWeight: "bold" }}>
                    Segunda Exploración
                  </p>
                  <BarChartSmall
                    labels={dataSegunda.grados}
                    segments={[...dataSegunda.segments]}
                    width={320}
                    height={160}
                  />
                </div>

                {/* TERCERA */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "9px", marginBottom: "2mm", fontWeight: "bold" }}>
                    Tercera Exploración
                  </p>
                  <BarChartSmall
                    labels={dataTercera.grados}
                    segments={[...dataTercera.segments]}
                    width={320}
                    height={160}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}