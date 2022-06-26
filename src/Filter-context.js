import { createContext, useContext, useReducer } from "react";
import { ReducerFunc } from "./ReducerUtil";

const initialState = {
  sort: "lth",
  size: "M",
  brand: "Roadster"
};

const FilterContext = createContext(initialState);
const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(ReducerFunc, {
    sort: "",
    size: [],
    brand: []
  });
  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
