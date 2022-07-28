import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const reverseText = createAsyncThunk('text/reverseText', async (text) => {
  console.log (text)
  try {
    const response = await axios.get(`http://localhost:3001/iecho?text=${text}`)
    return response.data
  } catch (error) {
    console.error(err)
  }
})

export const extra_reverseText = {
  [reverseText.pending]: (state) => {
      state.status = 'loading'
  },
  [reverseText.fulfilled]: (state, action) => {
      state.textResponse = action.payload
      state.status = 'fulfilled'
  },
  [reverseText.rejected]: (state, action) => {
      state.status = 'rejected'
      console.error(action.payload)
  },
}