import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    phoneNumber:null,
    clientsData:new Array,
    signupUserName:null
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
        setSignupUserName: (state, action) => {
            state.signupUserName = action.payload;
        },
    },
})

console.log('HHHHHHHHHHHHHHHHHHHHH');

export const { setPhoneNumber,setClientsData, setSignupUserName } = infoSlice.actions;

export const selectPhoneNumber = (state) => {
    return state.info.phoneNumber;
};

export const selectClientsData = (state) => {
    return state.info.clientsData;
};

export const selectSignupUserName = (state) => {
    return state.info.signupUserName;
};


export default infoSlice.reducer;