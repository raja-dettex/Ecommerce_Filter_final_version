import { useFilter } from "./../../Filter-context";

export const Brand = () => {
  const { filterDispatch } = useFilter();
  const handleBrandChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "BRAND",
      payload: {
        check,
        option
      }
    });
  };
  return (
    <div className="category">
      <div className="category-title">Brand</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Allen Solly"
            onChange={(e) => handleBrandChange(e, "Allen Solly")}
          />
          <span>Allen Solly</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Roadster"
            onChange={(e) => handleBrandChange(e, "Roadster")}
          />
          <span>Roadster</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Forever 21"
            onChange={(e) => handleBrandChange(e, "Forever 21")}
          />
          <span>Forever 21</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Gucci"
            onChange={(e) => handleBrandChange(e, "Gucci")}
          />
          <span>Gucci</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Nike"
            onChange={(e) => handleBrandChange(e, "Nike")}
          />
          <span>Nike</span>
        </label>
      </div>
    </div>
  );
};
