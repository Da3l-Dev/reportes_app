export function Table({ rows }: { rows: { id: number; name: string }[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
