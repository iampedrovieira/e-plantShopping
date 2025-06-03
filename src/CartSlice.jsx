import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      const itemName = action.payload.name;
      state.items = state.items.filter(item => item.name !== itemName);

    },
    updateQuantity: (state, action) => {
      const { name,quantity} = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
