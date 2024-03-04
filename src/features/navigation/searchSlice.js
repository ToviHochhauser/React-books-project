import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "", // Initial search term is empty
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

export const { setSearchTerm } = searchSlice.actions;
export const getSearchTerm = (state) => state.search.searchTerm; // Add this selector

export default searchSlice;
