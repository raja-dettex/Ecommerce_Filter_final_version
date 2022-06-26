export const Category = () => {
  return (
    <div className="category">
      <div className="category-title">Category</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input className="input" type="radio" name="category" value="all" />
          <span>All</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="radio" name="category" value="M" />
          <span>Men</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="radio" name="category" value="W" />
          <span>Women</span>
        </label>
      </div>
    </div>
  );
};
