import axios from "axios";

export const instanceAxios = axios.create({baseURL: 'https://course-api.com/react-store-products'});