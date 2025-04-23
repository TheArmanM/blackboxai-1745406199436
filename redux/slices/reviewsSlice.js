import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await axios.get('/api/reviews')
  return response.data
})

export const addReview = createAsyncThunk('reviews/addReview', async (newReview) => {
  const response = await axios.post('/api/reviews', newReview)
  return response.data
})

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
  },
})

export default reviewsSlice.reducer
