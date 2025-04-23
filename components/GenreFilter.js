import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGenreFilter } from '../redux/slices/genreFilterSlice'

const GenreFilter = () => {
  const dispatch = useDispatch()
  const selectedGenre = useSelector((state) => state.genreFilter)

  const genres = ['All', 'Fiksi', 'Nonfiksi']

  return (
    <div className="flex space-x-4 my-4 justify-center">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`px-4 py-2 rounded ${
            selectedGenre === genre
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => dispatch(setGenreFilter(genre))}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreFilter
