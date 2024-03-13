import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "../clientSlice";

const Store=configureStore({
    reducer:{
        client:clientSlice
    }
})
export default Store
