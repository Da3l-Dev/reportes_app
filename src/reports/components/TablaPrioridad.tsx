type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#369445",
  EPD: "#FACA58",
  RA: "#F38C2D",
  SE: "#A71D27",
};

type Alumno = {
  NOMALUMNO: string;
  GRADO: string;
  GRUPO: string;
  NIVEL_ETICA: NivelIntegracion;
  NIVEL_HUMANO: NivelIntegracion;
  NIVEL_LENGUAJES: NivelIntegracion;
  NIVEL_SABERES: NivelIntegracion;
};

type Prioridad = "MUY ALTA" | "ALTA" | "MEDIA";

export default function TablaPrioridad({ data }: { data: Alumno[] }) {
  // 🔥 Contar niveles bajos
  const getPeso = (alumno: Alumno) => {
    const niveles = [
      alumno.NIVEL_ETICA,
      alumno.NIVEL_HUMANO,
      alumno.NIVEL_LENGUAJES,
      alumno.NIVEL_SABERES,
    ];

    return niveles.filter((n) => n === "RA" || n === "SE").length;
  };

  // 🔥 Clasificar
  const clasificar = (alumno: Alumno): Prioridad | null => {
    const bajos = getPeso(alumno);

    if (bajos === 4) return "MUY ALTA";
    if (bajos === 3) return "ALTA";
    if (bajos >= 1) return "MEDIA";

    return null;
  };

  // 🔥 Agrupar
  const grupos: Record<Prioridad, Alumno[]> = {
    "MUY ALTA": [],
    ALTA: [],
    MEDIA: [],
  };

  data.forEach((alumno) => {
    const prioridad = clasificar(alumno);
    if (prioridad) {
      grupos[prioridad].push(alumno);
    }
  });

  // 🔥 ORDENAR (AQUÍ ESTÁ LO IMPORTANTE)
  Object.keys(grupos).forEach((key) => {
    grupos[key as Prioridad].sort((a, b) => {
      return getPeso(b) - getPeso(a); // DESC
    });
  });

  const total =
    grupos["MUY ALTA"].length + grupos["ALTA"].length + grupos["MEDIA"].length;

  if (total === 0) return null;

  const getTextColor = (bg: string) => {
    return bg === "#FACA58" ? "#000" : "#fff";
  };

  const renderGrupo = (titulo: string, alumnos: Alumno[], color: string) => {
    if (alumnos.length === 0) return null;

    return (
      <div className="mb-6">
        <div
          className="font-bold text-center py-2 rounded-lg mb-2"
          style={{ backgroundColor: color, color: "#fff" }}
        >
          {titulo} ({alumnos.length})
        </div>

        <table className="w-full text-xs border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Grado</th>
              <th className="p-2 border">Grupo</th>
              <th className="p-2 border">Ética</th>
              <th className="p-2 border">Humano</th>
              <th className="p-2 border">Lenguajes</th>
              <th className="p-2 border">Saberes</th>
            </tr>
          </thead>

          <tbody>
            {alumnos.map((alumno, i) => (
              <tr key={i} className="text-center even:bg-gray-50">
                <td className="p-2 border text-left">{alumno.NOMALUMNO}</td>
                <td className="p-2 border">{alumno.GRADO}</td>
                <td className="p-2 border">{alumno.GRUPO}</td>

                {[
                  alumno.NIVEL_ETICA,
                  alumno.NIVEL_HUMANO,
                  alumno.NIVEL_LENGUAJES,
                  alumno.NIVEL_SABERES,
                ].map((nivel, idx) => {
                  const bg = COLOR_MAP[nivel];
                  const textColor = getTextColor(bg);

                  return (
                    <td
                      key={idx}
                      className="p-2 border font-bold"
                      style={{
                        backgroundColor: bg,
                        color: textColor,
                      }}
                    >
                      {nivel}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-center font-bold text-lg mb-4">
        Alumnos que requieren atención prioritaria
      </h2>

      {renderGrupo("🔴 PRIORIDAD MUY ALTA", grupos["MUY ALTA"], "#A71D27")}
      {renderGrupo("🟠 PRIORIDAD ALTA", grupos["ALTA"], "#F38C2D")}
      {renderGrupo("🟡 PRIORIDAD MEDIA", grupos["MEDIA"], "#FACA58")}
    </div>
  );
}
