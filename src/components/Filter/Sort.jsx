import { useFilter } from "./../../Filter-context";

export const Sort = () => {
  const { state, filterDispatch } = useFilter();
  const { sort } = state;
  console.log(sort);
  const handleSort = (option) => {
    filterDispatch({
      type: option,
      payload: option
    });
  };

  return (
    <div className="category">
      <div className="category-title">Sort By Price</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="radio"
            name="price"
            value="lth"
            onChange={() => {
              handleSort("lth");
            }}
          />
          <span>Low to High</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="radio"
            name="price"
            value="htl"
            onChange={() => {
              handleSort("htl");
            }}
          />
          <span>High to Low</span>
        </label>
      </div>
    </div>
  );
};
