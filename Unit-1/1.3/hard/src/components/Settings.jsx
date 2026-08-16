function Settings() {
  return (
    <>
      <h1>Settings</h1>
      <p className="simple-copy">Manage your dashboard preferences from this nested route.</p>

      <div className="section-grid">
        <article className="mini-card">
          <h3>Theme</h3>
          <p className="simple-copy">Light mode is enabled by default.</p>
        </article>
        <article className="mini-card">
          <h3>Notifications</h3>
          <p className="simple-copy">Email alerts and admin notices stay on.</p>
        </article>
      </div>
    </>
  );
}

export default Settings;