const initBookModel = require('../models/Book')

exports.getAllBooks = async (req, res) => {
  try {
    const Book = initBookModel(req.app.locals.sequelize)
    const books = await Book.findAll()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getPopularBooks = async (req, res) => {
  try {
    const Book = initBookModel(req.app.locals.sequelize)
    const books = await Book.findAll({
      order: [['popularity', 'DESC']],
      limit: 10,
    })
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getBooksByGenre = async (req, res) => {
  try {
    const genre = req.params.genre
    const Book = initBookModel(req.app.locals.sequelize)
    const books = await Book.findAll({
      where: { genre: genre },
    })
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
