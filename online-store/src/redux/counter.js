import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  // State for products
  productCatalogue: [
    {
      image: '../../images/IMG_0949.jpg.webp',
      title: "Men's Sweater - Sage",
      price: 750.00
    },
    {
      image: '../../images/IMG_0895.jpg.webp',
      title: "Unisex Tee - Grey Melange - Plato",
      price: 250.00
    },
    {
      image: '../../images/IMG_0874.jpg.webp',
      title: "Unisex Tee - Grey Melange - Ō",
      price: 250.00
    },
    {
      image: '../../images/IMG_0716.jpg.webp',
      title: "Ladies Sweater - Sage",
      price: 750.00
    },
    {
      image: '../../images/productFive.jpg',
      title: "Unisex Sweater - Grey Melange",
      price: 500.00
    },
    {
      image: '../../images/productSix.jpg',
      title: "Plato House Blend - 1kg",
      price: 350.00
    },
    {
      image: '../../images/productSeven.jpg',
      title: "Plato house blend - 250g",
      price: 100.00
    },
    {
      image: '../../images/productEight.jpg',
      title: "Plato Socks",
      price: 189.00
    },
    {
      image: '../../images/productNine.jpg',
      title: "Plato Travel Mug",
      price: 649.00
    },
    {
      image: '../../images/productTen.jpg',
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