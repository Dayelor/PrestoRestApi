import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";

export const getProducts = createAsyncThunk(
    "/products/getProducts",
    async(thunkAPI,{rejectWithValue})=>{
        try {
            return await axios.get("aqui va la ruta al endpoint de la api");
        } 
        
        catch (error) {
            return rejectWithValue("se ha producido el errore: " + error.message)
        }
    }
)