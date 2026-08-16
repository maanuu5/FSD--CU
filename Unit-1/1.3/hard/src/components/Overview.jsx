function Overview() {
  return (
    <>
      <h1>Dashboard Overview</h1>
      <p className="simple-copy">A simple protected dashboard with a few live stats.</p>

      <div className="stat-grid">
        <article className="stat-card">
          <p className="stat-value">128</p>
          <p className="simple-copy">Active users</p>
        </article>
        <article className="stat-card">
          <p className="stat-value">24</p>
          <p className="simple-copy">Open tickets</p>
        </article>
        <article className="stat-card">
          <p className="stat-value">91%</p>
          <p className="simple-copy">System health</p>
        </article>
      </div>

      <div className="section-grid">
        <article className="mini-card">
          <h3>Recent activity</h3>
          <p className="simple-copy">New user registrations, report exports, and profile updates appear here.</p>
        </article>
        <article className="mini-card">
          <h3>Quick status</h3>
          <p className="status-pill">All systems running</p>
        </article>
      </div>
    </>
  );
}

export default Overview;