import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {assets:[], loading:false, error:null};

export const fetchAssets = createAsyncThunk("assets/fetchAssets", async (_, thunkAPI)=> {
   const {rejectedWithValue} = thunkAPI;
   try {
     const res = await fetch("http://localhost:5000/assets");
     const data = await res.json();
     return data;
   } catch(error) {
     return rejectedWithValue(error.message)
   }
})

const assetSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAssets.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [fetchAssets.fulfilled]: (state,action)=>{
            state.loading = false;
            state.assets = action.payload;
        },
        [fetchAssets.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export default assetSlice.reducer