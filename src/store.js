import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        "First Name": '',
        "Last Name": '',
        "Email": '',
        "Message": ''
    }
};

const directorySlice = createSlice({
    name: 'directory',
    initialState,
    reducers: {
        addPerson(state, action) {
            state.data = { ...action.payload }
        }
    }
});

export default configureStore({
    reducer: {
        directory: directorySlice.reducer
    }
});

export const reducer = directorySlice.reducer;
export const { addPerson } = directorySlice.actions;
export const showValues = (state) => state.directory.data;