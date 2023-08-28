import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    "First Name": '',
    "Last Name": '',
    "Email": '',
    "Message": ''
};

const directorySlice = createSlice({
    name: 'directory',
    initialState,
    reducers: {
        addPerson(state, action) {
            console.log(action.payload);
            state = {...action.payload}
        }
    }
});

export default configureStore({
    reducer: {
        directory: directorySlice.reducer
    }
});

export const { addPerson } = directorySlice.actions;
export const showDirectory = (state) => state.directory;