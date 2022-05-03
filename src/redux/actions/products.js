import { instanceAxios } from "../../api/api";
import axios from "axios";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS,
  UPDATE_SORT,
} from "../constants/constants";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_BEGIN });

  try {
    const { data } = await instanceAxios.get("/");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    dispatch({ type: LOAD_PRODUCTS, payload: data });
    dispatch({ type: LOAD_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getSingleProducts = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCTS_BEGIN });

  try {
    const { data } = await instanceAxios.get(
      `https://course-api.com/react-store-single-product?id=${id}`
    );
    dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCTS_ERROR });
  }
};

export const productSort = (value) => (dispatch) => {
  console.log(value);
  dispatch({ type: UPDATE_SORT, payload:value });
  
};
