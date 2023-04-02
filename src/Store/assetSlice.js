import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {assets:[], loading:false, error:null, asset:null};

export const fetchAssets = createAsyncThunk("assets/fetchAssets", async (_, thunkAPI)=> {
   const {rejectedWithValue} = thunkAPI;
   try {
     const res = await fetch("http://localhost:5000/assets");
     const data = await res.json();
     return data;
   } catch(error) {
     return rejectedWithValue(error.message)
   }
});

export const fetchAsset = createAsyncThunk("assets/fetchAsset", async (id, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/assets/${id}`);
      const data = await res.json();
      return data;
    } catch(error) {
      return rejectedWithValue(error.message)
    }
 });

export const deleteAsset = createAsyncThunk("assets/deleteAsset", async(id,thunkAPI)=>{
    const {rejectedWithValue} = thunkAPI;
    try {
        await fetch(`http://localhost:5000/assets/${id}`,{
            method: "DELETE",
        });
        return id;
      } catch(error) {
        return rejectedWithValue(error.message)
      }
})

export const insertAsset = createAsyncThunk("assets/insertAssets", async (item, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/assets",{
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "content-type": "application/json; charset=utf-8", 
        }
      });
      const data = await res.json();
      return data;
    } catch(error) {
      return rejectedWithValue(error.message)
    }
 });

const assetSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {},
    extraReducers: {
           // Fetch Assets
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
           // Get Asset
        [fetchAsset.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [fetchAsset.fulfilled]: (state,action)=>{
            state.loading = false;
            state.asset = action.payload;
        },
        [fetchAsset.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Delete Asset
        [deleteAsset.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [deleteAsset.fulfilled]: (state,action)=>{
            state.loading = false;
            state.assets = state.assets.filter((el)=>el.id !== action.payload)
        },
        [deleteAsset.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Create Asset
        [insertAsset.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [insertAsset.fulfilled]: (state,action)=>{
            state.loading = false;
            state.assets.push(action.payload)
        },
        [insertAsset.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export default assetSlice.reducer