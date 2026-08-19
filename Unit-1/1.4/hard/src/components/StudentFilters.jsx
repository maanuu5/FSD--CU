function StudentFilters({
  searchTerm,
  onSearchChange,
  department,
  onDepartmentChange,
  year,
  onYearChange,
  status,
  onStatusChange,
  sortBy,
  onSortByChange,
  departments,
  years,
}) {
  return (
    <section className="filter-grid" aria-label="Student filters">
      <label className="field">
        Search
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Name, email, or department"
        />
      </label>

      <label className="field">
        Department
        <select value={department} onChange={(event) => onDepartmentChange(event.target.value)}>
          <option value="ALL">All Departments</option>
          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        Year
        <select value={year} onChange={(event) => onYearChange(event.target.value)}>
          <option value="ALL">All Years</option>
          {years.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        Result
        <select value={status} onChange={(event) => onStatusChange(event.target.value)}>
          <option value="ALL">Pass + Fail</option>
          <option value="PASS">Pass Only</option>
          <option value="FAIL">Fail Only</option>
        </select>
      </label>

      <label className="field">
        Sort By
        <select value={sortBy} onChange={(event) => onSortByChange(event.target.value)}>
          <option value="RECENT">Recently Enrolled</option>
          <option value="NAME_ASC">Name A-Z</option>
          <option value="NAME_DESC">Name Z-A</option>
          <option value="MARKS_DESC">Highest Marks</option>
          <option value="MARKS_ASC">Lowest Marks</option>
        </select>
      </label>
    </section>
  );
}

export default StudentFilters;
