import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false
    },
    reducers: {
        setTrue(state) {
            state.loading = true
        },
        setFalse(state){
            state.loading = false
        }
    }
})

export const { setFalse, setTrue } = loadingSlice.actions;
export default loadingSlice.reducer;