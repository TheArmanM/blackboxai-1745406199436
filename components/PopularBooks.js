import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../redux/slices/booksSlice'
import BookCard from './BookCard'

const PopularBooks = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.items)
  const status = useSelector((state) => state.books.status)
  const error = useSelector((state) => state.books.error)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  if (status === 'loading') return <p>Loading popular books...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  // Filter top 10 popular books
  const popularBooks = [...books]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10)

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {popularBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  )
}

export default PopularBooks
