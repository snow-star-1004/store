import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  detail: [],
  productList: [
    {
      id: "1",
      name: "apple",
      content: "Thist is the apple computer",
      price: 30,
      count: 0,
      img: "product1",
    },
    {
      id: "2",
      name: "BlueSky",
      content: "Thist is the BlueSky computer",
      price: 30,
      count: 0,
      img: "product2",
    },
    {
      id: "3",
      name: "lenovo",
      content: "Thist is the lenovo computer",
      price: 30,
      count: 0,
      img: "product3",
    },
    {
      id: "4",
      name: "Dell",
      content: "Thist is the Dell computer",
      price: 30,
      count: 0,
      img: "product4",
    },
    {
      id: "5",
      name: "hp",
      content: "Thist is the hp computer",
      price: 30,
      count: 0,
      img: "product5",
    },
    {
      id: "6",
      name: "Acer",
      content: "Thist is the Acer computer",
      price: 30,
      count: 0,
      img: "product6",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.productList.find(
        (item) => item.id === action.payload.index
      ).count += 1;
      // console.log(state.cart.indexOf(action.payload.index));
      state.cart.indexOf(action.payload.index) === -1 &&
        state.cart.push(action.payload.index);
    },
    decrement: (state, action) => {
      state.productList.find(
        (item) => item.id === action.payload.index
      ).count -= 1;
      state.productList.find((item) => item.id === action.payload.index)
        .count === 0 &&
        (state.cart = state.cart.filter(
          (item) => item !== action.payload.index
        ));
    },
    remove: (state, action) => {
      state.productList.find(
        (item) => item.id === action.payload.index
      ).count = 0;
      state.cart = state.cart.filter((item) => item !== action.payload.index);
    },
    addDetail: (state, action)=> {
      state.detail = [];
      state.detail.push(state.productList.find(
        (item) => item.id === action.payload.index
      ));
    },

    emptyCart: (state) => {
      state.cart = [];
      state.productList.map((item) => (item.count = 0));
    },
  },
});
export const { increment, decrement, emptyCart, remove, addDetail } = productSlice.actions;
export default productSlice.reducer;
