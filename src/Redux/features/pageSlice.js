import {createSlice} from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
    }
});
export const selectPage = state => state.page.page;
export const {setPage} = pageSlice.actions;
export default pageSlice.reducer;

