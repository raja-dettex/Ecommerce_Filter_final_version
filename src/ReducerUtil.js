const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "lth":
      return {
        ...state,
        sort: action.payload
      };
    case "htl":
      return {
        ...state,
        sort: action.payload
      };
    case "SIZE":
      return {
        ...state,
        size: action.payload.checkjgy
          ? [...state.size, action.payload.option]
          : state.size.length > 0
          ? state.size.filter(
              (sizeValue) => sizeValue !== action.payload.option
            )
          : [...state.size]
      };
    case "BRAND":
      return {
        ...state,
        brand: action.payload.check
          ? [...state.brand, action.payload.option]
          : state.brand.length > 0
          ? state.brand.filter(
              (brandValue) => brandValue !== action.payload.option
            )
          : []
      };
    default:
      return state;
  }
};

const cartReducerFunc = (cartState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...cartState,
        ids: [...cartState.ids, action.payload]
      };
    case "REMOVE":
      return {
        ...cartState,
        ids:
          cartState.ids.length > 0
            ? cartState.ids.filter((Id) => Id !== action.payload)
            : [...cartState.ids]
      };
    default:
      return cartState;
  }
};

export { ReducerFunc, cartReducerFunc };
