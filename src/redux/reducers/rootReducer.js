import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { getSingleProduct, productReducer } from "./productsReducer";



const rootReducers = combineReducers({
    products:productReducer,
    singleProduct:getSingleProduct,
    filter:filterReducer
})


export default rootReducers