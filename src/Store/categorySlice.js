import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {categories:[], loading:false, error:null, category:null};

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (_, thunkAPI)=> {
   const {rejectedWithValue} = thunkAPI;
   try {
     const res = await fetch("http://localhost:5000/categories");
     const data = await res.json();
     return data;
   } catch(error) {
     return rejectedWithValue(error.message)
   }
});

export const fetchCategory = createAsyncThunk("categories/fetchCategory", async (id, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/categories/${id}`);
      const data = await res.json();
      return data;
    } catch(error) {
      return rejectedWithValue(error.message)
    }
 });

export const deleteCategory = createAsyncThunk("category/deleteCategory", async(id,thunkAPI)=>{
    const {rejectedWithValue} = thunkAPI;
    try {
        await fetch(`http://localhost:5000/categories/${id}`,{
            method: "DELETE",
        });
        return id;
      } catch(error) {
        return rejectedWithValue(error.message)
      }
})

export const insertCategory = createAsyncThunk("category/insertCategory", async (item, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/categories",{
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

 export const editCategory = createAsyncThunk("category/editCategory", async (item, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/categories/${item.id}`,{
        method: "PATCH",
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

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
           // Fetch Assets
        [fetchCategories.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [fetchCategories.fulfilled]: (state,action)=>{
            state.loading = false;
            state.categories = action.payload;
        },
        [fetchCategories.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Get Asset
        [fetchCategory.pending]: (state)=>{
            state.loading = true;
            state.error = null;
            
        },
        [fetchCategory.fulfilled]: (state,action)=>{
            state.loading = false;
            state.category = action.payload;
        },
        [fetchCategory.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Delete Asset
        [deleteCategory.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [deleteCategory.fulfilled]: (state,action)=>{
            state.loading = false;
            state.categories = state.categories.filter((el)=>el.id !== action.payload)
        },
        [deleteCategory.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Create Asset
        [insertCategory.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [insertCategory.fulfilled]: (state,action)=>{
            state.loading = false;
            state.categories.push(action.payload)
        },
        [insertCategory.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
            // Edit Asset
        [editCategory.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [editCategory.fulfilled]: (state,action)=>{
            state.loading = false;
            state.category = action.payload;
        },
        [editCategory.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export default categorySlice.reducer