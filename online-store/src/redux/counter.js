import { createSlice } from '@reduxjs/toolkit'
// Importing image sources
import productOne from '../images/IMG_0949.jpg.webp';
import productTwo from '../images/IMG_0895.jpg.webp';
import productThree from '../images/IMG_0874.jpg.webp';
import productFour from '../images/IMG_0716.jpg.webp';
import productFive from '../images/productFive.jpg';
import productSix from '../images/productSix.jpg';
import productSeven from '../images/productSeven.jpg';
import productEight from '../images/productEight.jpg';
import productNine from '../images/productNine.jpg';
import productTen from '../images/productTen.jpg';

const initialState = {
  // State for products
  productCatalogue: [
    {
      image: productOne,
      title: "Men's Sweater - Sage",
      price: 750.00
    },
    {
      image: productTwo,
      title: "Unisex Tee - Grey Melange - Plato",
      price: 250.00
    },
    {
      image: productThree,
      title: "Unisex Tee - Grey Melange - Ō",
      price: 250.00
    },
    {
      image: productFour,
      title: "Ladies Sweater - Sage",
      price: 750.00
    },
    {
      image: productFive,
      title: "Unisex Sweater - Grey Melange",
      price: 500.00
    },
    {
      image: productSix,
      title: "Plato House Blend - 1kg",
      price: 350.00
    },
    {
      image: productSeven,
      title: "Plato house blend - 250g",
      price: 100.00
    },
    {
      image: productEight,
      title: "Plato Socks",
      price: 189.00
    },
    {
      image: productNine,
      title: "Plato Travel Mug",
      price: 649.00
    },
    {
      image: productTen,
      title: "Plato Water Bottle",
      price: 799.00
    }
  ]
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer