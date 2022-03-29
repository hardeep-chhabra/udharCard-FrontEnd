import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    phoneNumber:null,
    clientsData:new Array
}


export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setClientsData: (state, action) => {
            state.clientsData = action.payload;
        },
    },
})

console.log('HHHHHHHHHHHHHHHHHHHHH');

export const { setPhoneNumber,setClientsData } = infoSlice.actions;

export const selectPhoneNumber = (state) => {
    return state.info.phoneNumber;
};

export const selectClientsData = (state) => {
    return state.info.clientsData;
};


export default infoSlice.reducer;