type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#369445",
  EPD: "#FACA58",
  RA: "#F38C2D",
  SE: "#A71D27",
};

type Alumno = {
  NOMALUMNO?: string;
  Nombre_Alumno?: string;
  GRADO?: string;
  GRUPO?: string;
  NIVEL_ETICA?: NivelIntegracion;
  Nivel_Etica?: NivelIntegracion;
  NIVEL_HUMANO?: NivelIntegracion;
  Nivel_Humano?: NivelIntegracion;
  NIVEL_LENGUAJES?: NivelIntegracion;
  Nivel_Lenguajes?: NivelIntegracion;
  NIVEL_SABERES?: NivelIntegracion;
  Nivel_Saberes?: NivelIntegracion;
};

type Prioridad = "MUY ALTA" | "ALTA" | "MEDIA";

export default function TablaPrioridad({ data = [] }: { data?: Alumno[] }) {
  // =====================================================
  // VALIDACIÓN EXTRA
  // =====================================================

  const alumnosSeguros = Array.isArray(data) ? data : [];

  // =====================================================
  // CONTAR NIVELES BAJOS
  // =====================================================

  const getPeso = (alumno: Alumno) => {
    const niveles = [
      alumno.NIVEL_ETICA || alumno.Nivel_Etica,
      alumno.NIVEL_HUMANO || alumno.Nivel_Humano,
      alumno.NIVEL_LENGUAJES || alumno.Nivel_Lenguajes,
      alumno.NIVEL_SABERES || alumno.Nivel_Saberes,
    ];

    return niveles.filter((n) => n === "RA" || n === "SE").length;
  };

  // =====================================================
  // CLASIFICAR
  // =====================================================

  const clasificar = (alumno: Alumno): Prioridad | null => {
    const bajos = getPeso(alumno);

    if (bajos === 4) return "MUY ALTA";
    if (bajos === 3) return "ALTA";
    if (bajos >= 1) return "MEDIA";

    return null;
  };

  // =====================================================
  // AGRUPAR
  // =====================================================

  const grupos: Record<Prioridad, Alumno[]> = {
    "MUY ALTA": [],
    ALTA: [],
    MEDIA: [],
  };

  alumnosSeguros.forEach((alumno) => {
    try {
      const prioridad = clasificar(alumno);

      if (prioridad) {
        grupos[prioridad].push(alumno);
      }
    } catch (error) {
      console.error("❌ Error procesando alumno:", alumno);
    }
  });

  // =====================================================
  // ORDENAR
  // =====================================================

  Object.keys(grupos).forEach((key) => {
    grupos[key as Prioridad].sort((a, b) => {
      return getPeso(b) - getPeso(a);
    });
  });

  // =====================================================
  // TOTAL
  // =====================================================

  const total =
    grupos["MUY ALTA"].length + grupos["ALTA"].length + grupos["MEDIA"].length;

  if (total === 0) return null;

  // =====================================================
  // COLOR TEXTO
  // =====================================================

  const getTextColor = (bg?: string) => {
    return bg === "#FACA58" ? "#000" : "#fff";
  };

  // =====================================================
  // RENDER GRUPO
  // =====================================================

  const renderGrupo = (titulo: string, alumnos: Alumno[], color: string) => {
    if (!Array.isArray(alumnos)) return null;

    if (alumnos.length === 0) return null;

    return (
      <div className="mb-6">
        <div
          className="font-bold text-center py-2 rounded-lg mb-2"
          style={{
            backgroundColor: color,
            color: "#fff",
          }}
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
            {alumnos.map((alumno, i) => {
              try {
                return (
                  <tr key={i} className="text-center even:bg-gray-50">
                    <td className="p-2 border text-left">
                      {alumno.NOMALUMNO || alumno.Nombre_Alumno || "SIN NOMBRE"}
                    </td>

                    <td className="p-2 border">{alumno.GRADO || "-"}</td>

                    <td className="p-2 border">{alumno.GRUPO || "-"}</td>

                    {[
                      alumno.NIVEL_ETICA || alumno.Nivel_Etica,
                      alumno.NIVEL_HUMANO || alumno.Nivel_Humano,
                      alumno.NIVEL_LENGUAJES || alumno.Nivel_Lenguajes,
                      alumno.NIVEL_SABERES || alumno.Nivel_Saberes,
                    ].map((nivel, idx) => {
                      const bg =
                        nivel && COLOR_MAP[nivel] ? COLOR_MAP[nivel] : "#999";

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
                          {nivel || "-"}
                        </td>
                      );
                    })}
                  </tr>
                );
              } catch (error) {
                console.error("❌ Error renderizando alumno:", alumno);

                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // =====================================================
  // RENDER PRINCIPAL
  // =====================================================

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
