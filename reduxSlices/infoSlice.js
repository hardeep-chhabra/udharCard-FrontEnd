import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    phoneNumber:null
}


export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
    },
})

console.log('HHHHHHHHHHHHHHHHHHHHH');

export const { setPhoneNumber } = infoSlice.actions;

export const selectPhoneNumber = (state) => {
    return state.info.phoneNumber;
};


export default infoSlice.reducer;