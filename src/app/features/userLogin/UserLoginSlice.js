import { createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

const initialState = {
    loggedUser: null,
};

const UserLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedInUser = acrion.payload
        },
        logout: (state) => {
            state.loggedInUser = null;
        }
    }
});

export const { login, logout } = UserLoginSlice.actions;

export default UserLoginSlice.reducer;