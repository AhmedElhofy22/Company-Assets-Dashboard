import { configureStore } from "@reduxjs/toolkit";
import assets from './assetSlice'

const store = configureStore({
    reducer: { assets }
})

export default store;