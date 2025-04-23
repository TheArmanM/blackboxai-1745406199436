import { createSlice } from '@reduxjs/toolkit'

const genreFilterSlice = createSlice({
  name: 'genreFilter',
  initialState: 'All',
  reducers: {
    setGenreFilter(state, action) {
      return action.payload
    },
  },
})

export const { setGenreFilter } = genreFilterSlice.actions
export default genreFilterSlice.reducer
