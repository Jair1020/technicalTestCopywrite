import { createSlice } from '@reduxjs/toolkit'
import { extra_reverseText, reverseText } from '../actions/reverseText'



const initialState = {
  text: '',
  textResponse: {}, 
  status: 'loading',
}

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
    }
  },
  extraReducers: {
    //Async Actions
    ...extra_reverseText
}

})

export const textSelector = state => state.text
export const  { setText } = textSlice.actions
export default textSlice.reducer

