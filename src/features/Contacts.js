import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {value: {
        type: "",
        name: "",
        email: "",
        phone: "",
        status: false        
    }},
    reducers: {
        showContacts: (state, action) => {
                state.value = action.payload;
            }
        },
    },
);


export const { showContacts } = userSlice.actions;
export default userSlice.reducer;

