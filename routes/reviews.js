const express = require('express');
const router = express.Router();
const books = require('../data/books');

// Task 8: Add/Modify review
router.put('/books/:isbn/review', (req, res) => {
    const { username, review } = req.body;
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) {
        book.review = `${username}: ${review}`;
        res.status(200).send("Review updated successfully");
    } else {
        res.status(404).send("Book not found");
    }
});

// Task 9: Delete review
router.delete('/books/:isbn/review', (req, res) => {
    const { username } = req.body;
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book && book.review.startsWith(`${username}:`)) {
        book.review = "";
        res.status(200).send("Review deleted successfully");
    } else {
        res.status(404).send("Review not found or unauthorized");
    }
});

module.exports = router;
