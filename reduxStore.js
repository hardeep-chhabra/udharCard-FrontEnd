import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./reduxSlices/infoSlice";


export const reduxStore = configureStore({
    reducer:{
        info: infoReducer
    }
});