import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../../Common/Apı/Api";
import axios from "axios";

export const getAllFilms = createAsyncThunk("getAllFilms", async ({title, page, year, type}) => {
    const response = await axios.get(`${BASE_URL}s=${title}&page=${page}${year.trim().length > 0 ? `&y=${year}` : ""}${type ? `&type=${type}` : ""}`);
    return response.data;
})
export const getSingleFilm = createAsyncThunk("getSingleFilm", async (id) => {
    const response = await axios.get(`${BASE_URL}i=${id}`);

    return response.data;
})


const filmSlice = createSlice({
    name: 'film',
    initialState: {
        films: [],
        film: {},
        status: "idle",
    },

    extraReducers: {
        [getAllFilms.pending]: (state) => {
            state.status = "pending";
            state.films = [];
        },
        [getAllFilms.fulfilled]: (state, action) => {
            state.films = action.payload;
            state.status = "succeeded";
            state.page = action.payload.page;
        },
        [getAllFilms.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [getSingleFilm.pending]: (state) => {
            state.status = "pending";
        },
        [getSingleFilm.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.film = action.payload;

        },
        [getSingleFilm.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }


})
export const selectAllFilms = state => state.film.films;
export const selectTotalPage = state => Math.ceil(state.film.films.totalResults / 10);
export const selectSingleFilm = state => state.film.film;
export const selectStatus = state => state.film.status;


export default filmSlice.reducer;