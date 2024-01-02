const express = require('express');
const router = express.Router();

// Example book data (usually fetched from MongoDB)
let books = [
  { id: 1, name: 'Book A', author: 'Author A', availability: true },
  { id: 2, name: 'Book B', author: 'Author B', availability: false },
  // ...
];

// GET all books
router.get('/books', (req, res) => {
  res.json(books);
});

// POST a new book
router.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Other endpoints: Update, Delete, etc.

module.exports = router;
