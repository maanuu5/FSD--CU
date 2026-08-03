function Sidebar({ menuItems }) {
  return (
    <aside className="sidebar-panel">
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
