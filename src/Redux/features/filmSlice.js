import {createSlice} from "@reduxjs/toolkit";

const filmSlice = createSlice({
    name: 'film',
    initialState: {
        films: [],
        status: "idle",
        error: null
    },


})

export default filmSlice.reducer;