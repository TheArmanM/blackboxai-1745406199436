const initReviewModel = require('../models/Review')

exports.getAllReviews = async (req, res) => {
  try {
    const Review = initReviewModel(req.app.locals.sequelize)
    const reviews = await Review.findAll()
    res.json(reviews)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.addReview = async (req, res) => {
  try {
    const { name, rating, bookTitle, comment } = req.body
    const Review = initReviewModel(req.app.locals.sequelize)
    const newReview = await Review.create({ name, rating, bookTitle, comment })
    res.status(201).json(newReview)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
