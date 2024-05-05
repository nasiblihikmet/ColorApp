import { configureStore } from '@reduxjs/toolkit'
import colorSlice from "./colorRedux"

export const store = configureStore({
    reducer: {

  colorsRedux : colorSlice,
      
        
  },
})