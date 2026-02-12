import fs from "fs";
import path from "path";

function getImageBase64(relativePath: string) {
  const absolutePath = path.resolve(process.cwd(), relativePath);
  const buffer = fs.readFileSync(absolutePath);
  return buffer.toString("base64");
}

const logoSephBase64 = getImageBase64("src/assets/img/logo_seph.png");
const logoIheBase64 = getImageBase64("src/assets/img/logo_ihe.png");

/* =========================
   FORMATEADOR DE NÚMEROS
========================= */
function formatNumber(value: number | undefined | null) {
  return Number(value || 0).toLocaleString("en-US");
}

export default function Header({
  data,
  viewText = true,
  isZona = true,
  title,
}: {
  data: any;
  viewText?: boolean;
  title?: string;
  isZona?: boolean;
}) {
  return (
    <div className="header_report">
      <div className="content_logos">
        <img
          className="image_logo"
          src={`data:image/png;base64,${logoSephBase64}`}
          alt="Logo SEPH"
        />
        <img
          className="image_logo"
          src={`data:image/png;base64,${logoIheBase64}`}
          alt="Logo IHE"
        />
      </div>

      <h3>{title || "Reporte"}</h3>

      <h4>
        {data?.opcion_educativa || ""} CCT:{" "}
        {isZona ? data?.cct_zona || "" : data?.cct_sector || ""}
      </h4>

      {viewText && (
        <div className="content_data_text">
          <p>Estudiantes totales: {formatNumber(data?.estudiantes_zona)}</p>

          <p>
            Estudiantes participantes:{" "}
            {formatNumber(data?.estudiantes_participantes)}
          </p>

          <p>Escuelas totales: {formatNumber(data?.escuelas_zona)}</p>

          <p>
            Escuelas participantes: {formatNumber(data?.escuelas_participantes)}
          </p>
        </div>
      )}
    </div>
  );
}
