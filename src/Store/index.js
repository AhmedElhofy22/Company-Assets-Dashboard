import { configureStore } from "@reduxjs/toolkit";
import assets from './assetSlice'
import employees from "./employSlice";
import categories from './categorySlice'

const store = configureStore({
    reducer: { assets , employees , categories}
})

export default store;