import fs from "fs";
import path from "path";
import React from "react";

function getImageBase64(relativePath: string) {
  const absolutePath = path.resolve(process.cwd(), relativePath);
  const buffer = fs.readFileSync(absolutePath);
  return buffer.toString("base64");
}

const logoSephBase64 = getImageBase64("assets/img/logo_seph.png");

/* =========================
   FORMATEADOR DE NÚMEROS
========================= */
function formatNumber(value: number | undefined | null) {
  return Number(value || 0).toLocaleString("en-US");
}

export default function Header({
  data,
  titleReport,
  viewText = true,
  isZona = true,
  isOpEdu = false,
  title,
  children, // 👈 Agregamos children
}: {
  data: any;
  titleReport?: string;
  viewText?: boolean;
  title?: string;
  isZona?: boolean;
  isOpEdu?: boolean;
  children?: React.ReactNode; // 👈 Tipo para children
}) {
  return (
    <div className="header_report">
      <div
        className="content_logos"
        style={{
          display: "flex",
          alignItems: "center", // 👈 clave para alinear vertical
          gap: "12px",
          padding: 20,
        }}
      >
        <img
          className="image_logo"
          src={`data:image/png;base64,${logoSephBase64}`}
          alt="Logo SEPH"
          style={{ height: "60px", width: "auto" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="title_pdf" style={{ margin: 0 }}>
            {titleReport || "EJERCICIOS INTEGRADORES DEL APRENDIZAJE 25-26"}
          </h1>

          <span className="title_pdf" style={{ fontSize: "10px", margin: 0 }}>
            Subsecretaría de Planeación y Evaluación
          </span>

          <span className="title_pdf" style={{ fontSize: "10px", margin: 0 }}>
            Dirección General de Información, Registro y Estadística
          </span>

          <span className="title_pdf" style={{ fontSize: "10px", margin: 0 }}>
            Dirección de Análisis de Información del Sector Educativo
          </span>
        </div>
      </div>

      <h3>{title || "Reporte"}</h3>

      {/* Título de opción educativa */}
      {isOpEdu ? (
        <h4>
          {data?.opcion_educativa || ""} {data?.nivel || ""}{" "}
          {data?.subnivel || ""}
        </h4>
      ) : (
        <h4>{data?.opcion_educativa || ""}</h4>
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
              <p>
                JEFE DE SECTOR: <strong>{data.nombre_sup_sector}</strong>
              </p>
            )}
          </div>

          {viewText && (
            <div className="content_data_text">
              <p>
                Estudiantes participantes:{" "}
                {formatNumber(data?.estudiantes_participantes)}
              </p>
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
