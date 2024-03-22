import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loadingSlice";
import userIdReducer from "./userIdSlice";

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        user_id: userIdReducer,
    }
});

export default store;