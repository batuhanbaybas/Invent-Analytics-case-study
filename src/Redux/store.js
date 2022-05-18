import {configureStore} from "@reduxjs/toolkit";
import filmSlice from "./features/filmSlice";

const store = configureStore({
    reducer: {
        film: filmSlice
    }
})

export default store