import {configureStore} from "@reduxjs/toolkit";
import filmSlice from "./features/filmSlice";
import pageSlice from "./features/pageSlice";

const store = configureStore({
    reducer: {
        film: filmSlice,
        page: pageSlice
    }
})

export default store