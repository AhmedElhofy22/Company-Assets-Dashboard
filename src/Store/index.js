import { configureStore } from "@reduxjs/toolkit";
import assets from './assetSlice'
import employees from "./employSlice";

const store = configureStore({
    reducer: { assets , employees}
})

export default store;