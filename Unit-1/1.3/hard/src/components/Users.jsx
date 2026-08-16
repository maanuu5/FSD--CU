function Users() {
  const rows = [
    { name: "Manu", role: "Admin", status: "Active" },
    { name: "shivam", role: "Editor", status: "Active" },
    { name: "sarvesh", role: "Viewer", status: "Pending" },
  ];

  return (
    <>
      <h1>Users</h1>
      <p className="simple-copy">This nested route shows a simple list of dashboard users.</p>

      <div className="section-grid">
        {rows.map((row) => (
          <article className="mini-card" key={row.name}>
            <h3>{row.name}</h3>
            <p className="simple-copy">Role: {row.role}</p>
            <p className="status-pill">{row.status}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Users;