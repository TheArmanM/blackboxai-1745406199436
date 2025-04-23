import React from 'react'

const ReviewBox = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 max-w-md">
      <h4 className="font-semibold">{review.name}</h4>
      <p className="text-yellow-500">
        {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
      </p>
      <p className="italic text-gray-600">{review.bookTitle}</p>
      <p className="mt-2">{review.comment}</p>
    </div>
  )
}

export default ReviewBox
