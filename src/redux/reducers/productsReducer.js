import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_SUCCESS,
} from "../constants/constants";

const initialState = {
  loading: false,
  products_error: false,
  products_single_error: false,
  products: [],
  featured_products: [],
  single_product: {},
  filter_products:[],

};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (feat) => feat.featured === true
      );
      return {
        ...state,
        loading: false,
        products: action.payload,
        featured_products,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        products_error: true,
      };
    default:
      return state;
  }
};

export const getSingleProduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        single_product: action.payload,
        loading: false,
        products_single_error: false,
      };
    case GET_SINGLE_PRODUCTS_ERROR:
      return {
        ...state,
        products_single_error: true,
        loading: false,
      };

    default:
      return state;
  }
};




