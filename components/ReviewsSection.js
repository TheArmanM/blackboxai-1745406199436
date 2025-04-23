import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews } from '../redux/slices/reviewsSlice'
import ReviewBox from './ReviewBox'

const ReviewsSection = () => {
  const dispatch = useDispatch()
  const reviews = useSelector((state) => state.reviews.items)
  const status = useSelector((state) => state.reviews.status)
  const error = useSelector((state) => state.reviews.error)

  useEffect(() => {
    dispatch(fetchReviews())
  }, [dispatch])

  if (status === 'loading') return <p>Loading reviews...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <div className="flex flex-wrap justify-center p-4">
      {reviews.map((review) => (
        <ReviewBox key={review._id} review={review} />
      ))}
    </div>
  )
}

export default ReviewsSection
