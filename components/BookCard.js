import React from 'react'

const BookCard = ({ book }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden m-2 flex-shrink-0">
      <img
        className="w-full h-48 object-cover"
        src={book.coverImage}
        alt={book.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-sm mt-2">{book.description}</p>
      </div>
    </div>
  )
}

export default BookCard
