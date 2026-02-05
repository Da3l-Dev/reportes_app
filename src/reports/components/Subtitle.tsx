export default function Subtitle({ subtitle }: { subtitle: string }) {
  return (
    <div className="subtitle_container">
      <h2 className="subtitle_report">{subtitle}</h2>
    </div>
  );
}
