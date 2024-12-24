const express = require('express');
const router = express.Router();
const books = require('../data/books');

// Task 1: Get book list
router.get('/books', (req, res) => {
    res.status(200).json(books);
});

// Task 2: Get book by ISBN
router.get('/books/:isbn', (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) res.status(200).json(book);
    else res.status(404).send("Book not found");
});

// Task 3: Get books by author
router.get('/books/author/:author', (req, res) => {
    const results = books.filter(b => b.author === req.params.author);
    res.status(200).json(results);
});

// Task 4: Get books by title
router.get('/books/title/:title', (req, res) => {
    const results = books.filter(b => b.title === req.params.title);
    res.status(200).json(results);
});

// Task 5: Get book review
router.get('/books/:isbn/review', (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) res.status(200).send(book.review);
    else res.status(404).send("Review not found");
});

module.exports = router;
