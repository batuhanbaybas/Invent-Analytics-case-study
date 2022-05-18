import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../../Common/Apı/Api";
import axios from "axios";

export const getFilms = createAsyncThunk("getFilms", async ({title, page = 1, year, type}) => {
    console.log(page)
    const response = await axios.get(`${BASE_URL}s=${title}&page=${page}${year.trim().length > 0 ? `&y=${year}` : ""}${type ? `&type=${type}` : ""}`);
    return response.data;
})
export const getFilm = createAsyncThunk("getFilm", async (id) => {
    const response = await axios.get(`${BASE_URL}i=${id}`);

    return response.data;
})


const filmSlice = createSlice({
    name: 'film',
    initialState: {
        films: [],
        film: {},
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
        },
        [getFilm.pending]: (state, action) => {
            state.status = "pending";
        },
        [getFilm.fulfilled]: (state, action) => {
            state.film = action.payload;
            state.status = "succeeded";
        },
        [getFilm.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }


})
export const selectAllFilms = state => state.film.films;
export const selectFilm = state => state.film.film;
export const selectStatus = state => state.film.status;
export const selectPage = state => state.film.page;
export const selectError = state => state.film.error;

export default filmSlice.reducer;