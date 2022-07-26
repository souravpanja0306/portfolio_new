import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    color: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        darkColor(state, action) {
            state.color = action.payload
        },


        lightColor(state, action) {
            state.color = action.payload
        }
    }
})

export const { darkColor, lightColor } = themeSlice.actions;
export default themeSlice.reducer;