import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../features/UserLogin/UserLoginSlice";

const store = configureStore({
    reducer: {
        userLogin: userLoginReducer
    }
});

export default store;