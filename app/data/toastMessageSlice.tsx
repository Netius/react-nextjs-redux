import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let toastMsg: string = "";
let css: string = "";

// TODO Need to implement logic based here
export const toastMessageSlice = createSlice({
  name: 'toast',
  initialState: {
    toastMessage: toastMsg,
    cssClass: css
  },
  reducers: {
    successToast: (state, action: PayloadAction<string>) => {
      state.toastMessage = action.payload[0];
      state.cssClass = action.payload[1];
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toastMessage = action.payload[0];
      state.cssClass = action.payload[1];
    },
    clearToast: (state, action: PayloadAction<string>) => {
      state.toastMessage = "";
      state.cssClass = "";

    }
  }
})
