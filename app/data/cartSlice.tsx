import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Need to type Initialstate here to fix error
let cartProductArray: number[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: cartProductArray,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds]
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId, 1); 
    },
    clearAllItems: (state,action: PayloadAction<number> ) => {
      state.cartProductIds = [];
    }
  }
})
