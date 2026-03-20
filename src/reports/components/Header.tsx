import fs from "fs";
import path from "path";
import React from "react";

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
  isOpEdu = false,
  title,
  children, // 👈 Agregamos children
}: {
  data: any;
  viewText?: boolean;
  title?: string;
  isZona?: boolean;
  isOpEdu?: boolean;
  children?: React.ReactNode; // 👈 Tipo para children
}) {
  return (
    <div className="header_report">
      <div className="content_logos">
        <img
          className="image_logo"
          src={`data:image/png;base64,${logoSephBase64}`}
          alt="Logo SEPH"
          style={{ height: "80px", width: "auto" }}
        />
        <h1 className="title_pdf">
          EJERCICIOS INTEGRADORES DEL APRENDIZAJE 25-26
        </h1>
      </div>

      <h3>{title || "Reporte"}</h3>

      {/* Título de opción educativa */}
      {isOpEdu ? (
        <h4>
          {data?.opcion_educativa || ""} {data?.nivel || ""}{" "}
          {data?.subnivel || ""}
        </h4>
      ) : (
        <h4>
          {data?.opcion_educativa || ""} CCT:{" "}
          {isZona ? data?.cct_zona || "" : data?.cct_sector || ""}
        </h4>
      )}

      {/* Para opción educativa: SOLO mostramos los children (datos estáticos) */}
      {isOpEdu ? (
        <div className="content_data_text">{children}</div>
      ) : (
        /* Para zona/sector: mostramos los datos normales */
        <>
          <div className="content_data_text">
            {data?.nombre_sup_zona && isZona && (
              <p>JEFE DE ZONA: {data.nombre_sup_zona}</p>
            )}
            {data?.nombre_sup_sector && (
              <p>JEFE DE SECTOR: {data.nombre_sup_sector}</p>
            )}
          </div>

          {viewText && (
            <div className="content_data_text">
              <p>Estudiantes totales: {formatNumber(data?.estudiantes_zona)}</p>
              <p>
                Estudiantes participantes:{" "}
                {formatNumber(data?.estudiantes_participantes)}
              </p>
              <p>Escuelas totales: {formatNumber(data?.escuelas_zona)}</p>
              <p>
                Escuelas participantes:{" "}
                {formatNumber(data?.escuelas_participantes)}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
