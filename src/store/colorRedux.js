import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allPalettes:[]
}

export const colorSlice = createSlice({
  name: 'colorsRedux',
  initialState,
  reducers: {
 
      setAllPalettes: (state, action) => {
          
     state.allPalettes.push(action.payload)
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { setAllPalettes} = colorSlice.actions

export default colorSlice.reducer