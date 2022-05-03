import { LOAD_PRODUCTS, UPDATE_SORT } from "../constants/constants";

const initialState = {
  filter_products: [],
  all_products: [],
  sort: "price-lowest",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        filter_products: action.payload,
        all_products: action.payload,
      };
    case UPDATE_SORT:
      const { sort, filter_products } = state;
      let tempProducts = [...filter_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0
        });
      }
      if (sort === "price-higest") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        });
      }
        if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        });
      }
      return {
        ...state,
        filter_products: tempProducts,
        sort: action.payload,
      };

    default:
      return state;
  }
};
