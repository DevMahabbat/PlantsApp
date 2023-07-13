import { createSlice } from "@reduxjs/toolkit";


interface initialStateType {
  dark: boolean;
}

const initialState = {
    dark :false
}


const ThemeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers :{
        changeTheme: (state) =>{
        state.dark = !state.dark
        }

    }
})

export default ThemeSlice.reducer

export const {changeTheme} = ThemeSlice.actions