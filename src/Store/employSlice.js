import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {employees:[], loading:false, error:null, employer:null};

export const fetchEmployees = createAsyncThunk("employees/fetchEmployees", async (_, thunkAPI)=> {
   const {rejectedWithValue} = thunkAPI;
   try {
     const res = await fetch("http://localhost:5000/employees");
     const data = await res.json();
     return data;
   } catch(error) {
     return rejectedWithValue(error.message)
   }
});

export const fetchEmployer = createAsyncThunk("employees/fetchEmployer", async (id, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/employees/${id}`);
      const data = await res.json();
      return data;
    } catch(error) {
      return rejectedWithValue(error.message)
    }
 });

export const deleteEmployer = createAsyncThunk("employees/deleteEmployer", async(id,thunkAPI)=>{
    const {rejectedWithValue} = thunkAPI;
    try {
        await fetch(`http://localhost:5000/employees/${id}`,{
            method: "DELETE",
        });
        return id;
      } catch(error) {
        return rejectedWithValue(error.message)
      }
})

export const insertEmployer = createAsyncThunk("employees/insertEmployer", async (item, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/employees",{
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

 export const editEmployer = createAsyncThunk("employees/editEmployer", async (item, thunkAPI)=> {
    const {rejectedWithValue} = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/employees/${item.id}`,{
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

const employSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {},
    extraReducers: {
           // Fetch Employer
        [fetchEmployees.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [fetchEmployees.fulfilled]: (state,action)=>{
            state.loading = false;
            state.employees = action.payload;
        },
        [fetchEmployees.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Get Employer
           [fetchEmployer.pending]: (state)=>{
            state.loading = true;
            state.error = null;
            state.employer = null;
        },
        [fetchEmployer.fulfilled]: (state,action)=>{
            state.loading = false;
            state.employer = action.payload;
        },
        [fetchEmployer.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Delete Employer
        [deleteEmployer.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [deleteEmployer.fulfilled]: (state,action)=>{
            state.loading = false;
            state.employees = state.employees.filter((el)=>el.id !== action.payload)
        },
        [deleteEmployer.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
           // Create Employer
        [insertEmployer.pending]: (state)=>{
            state.loading = true;
            state.error = null
        },
        [insertEmployer.fulfilled]: (state,action)=>{
            state.loading = false;
            state.employees.push(action.payload)
        },
        [insertEmployer.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
             // Edit Employer
             [editEmployer.pending]: (state)=>{
                state.loading = true;
                state.error = null
            },
            [editEmployer.fulfilled]: (state,action)=>{
                state.loading = false;
                state.employer = action.payload;
            },
            [editEmployer.rejected]: (state,action)=>{
                state.loading = false;
                state.error = action.payload;
            },
    },
})

export default employSlice.reducer