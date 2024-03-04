import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import shopingCartSlice from "../features/order/shopingCartSlice";
import searchSlice from "../features/navigation/searchSlice"; // Import the searchSlice reducer

const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        auth: userSlice.reducer,
        cart: shopingCartSlice.reducer,
        // Add the searchSlice reducer
        // Add other reducers here if you have any
    },
});

export default store;
