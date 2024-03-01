import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isLoading: false,
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpStart:(state)=>{
      state.isLoading=true
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null; // Clear the error state
    },
    
    signUpFailure: (state, action) => {
      state.isLoading=false
      state.error = {
        message: action.payload.message,
        status: action.payload.response ? action.payload.response.status : null,
      };
    },
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error=null
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = {
        message: action.payload.message,
        status: action.payload.response ? action.payload.response.status : null,
      };
    },
    updateStart: (state) => {
      state.isLoading = true;
    },
    updateSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    updateFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  
  loginSuccess,
  loginStart,
  loginFailure,

  updateStart,
  updateSuccess,
  updateFailure,

} = userSlice.actions;

export default userSlice.reducer;
