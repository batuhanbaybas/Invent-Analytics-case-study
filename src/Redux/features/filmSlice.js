import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Api} from "../../Common/Apı/Api";

export const getFilms = createAsyncThunk("getFilms", async (title, page) => {
    const response = await Api.get(`s=${title}&page=${page}`);

    return response.data;
})


const filmSlice = createSlice({
    name: 'film',
    initialState: {
        films: [],
        status: "idle",
        page: 1,
        error: null
    },
    extraReducers: {
        [getFilms.pending]: (state, action) => {
            state.status = "pending";
        },
        [getFilms.fulfilled]: (state, action) => {
            state.films = action.payload;
            state.status = "succeeded";
            state.page = action.payload.page;
        },
        [getFilms.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }


})

export default filmSlice.reducer;