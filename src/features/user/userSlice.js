import { createSlice } from "@reduxjs/toolkit";

// Define initial state for authentication

const initialState = {
    isAuthenticated: false,
    user: null,
};

// Create a slice for authentication
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        clearAuth: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});
export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;