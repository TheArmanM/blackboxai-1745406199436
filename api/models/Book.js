const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.ENUM('Fiksi', 'Nonfiksi'),
      allowNull: false,
    },
    popularity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    coverImage: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  })

  return Book
}
