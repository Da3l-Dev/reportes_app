import fs from "fs";
import path from "path";

function getImageBase64(relativePath: string) {
  const absolutePath = path.resolve(process.cwd(), relativePath);

  const buffer = fs.readFileSync(absolutePath);
  return buffer.toString("base64");
}

const logoSephBase64 = getImageBase64("src/assets/img/logo_seph.png");
const logoIheBase64 = getImageBase64("src/assets/img/logo_ihe.png");

export default function Header({ title_report }: { title_report: string }) {
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
    </div>
  );
}
