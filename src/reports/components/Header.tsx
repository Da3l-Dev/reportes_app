export default function Header({ title_report }: { title_report: string }) {
  return (
    <div className="header_report">
      <h1 className="title_report">{title_report}</h1>
    </div>
  );
}
