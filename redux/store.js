import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
import reviewsReducer from './slices/reviewsSlice'
import genreFilterReducer from './slices/genreFilterSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    reviews: reviewsReducer,
    genreFilter: genreFilterReducer,
  },
})

export default store
