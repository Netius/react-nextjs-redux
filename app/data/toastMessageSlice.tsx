import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let toastMsg: string = "";

// TODO Need to implement logic based here
export const toastMessageSlice = createSlice({  
  name: 'toast',
  initialState: {
    toastMessage: toastMsg,
  },
  reducers: {
    successToast: (state, action: PayloadAction<string>) => {
        state.toastMessage = action.payload;
    },
    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   const indexOfId = state.cartProductIds.indexOf(action.payload)
    //   state.cartProductIds.splice(indexOfId, 1); 
    // },
    // clearAllItems: (state,action: PayloadAction<number> ) => {
    //   state.cartProductIds = [];
    // }
  }
})
