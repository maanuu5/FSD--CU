function Reports() {
  return (
    <>
      <h1>Reports</h1>
      <p className="simple-copy">Nested report section for exports and summaries.</p>

      <div className="section-grid">
        <article className="mini-card">
          <h3>Weekly summary</h3>
          <p className="simple-copy">Sales, users, and support metrics are collected here.</p>
        </article>
        <article className="mini-card">
          <h3>Export history</h3>
          <p className="simple-copy">Download CSV and PDF reports from this section.</p>
        </article>
      </div>
    </>
  );
}

export default Reports;