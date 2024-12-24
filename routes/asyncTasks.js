const express = require('express');
const router = express.Router();
const axios = require('axios');

// Task 10: Get all books using async/await
router.get('/books', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/general/books');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send("Error fetching books");
    }
});

// Task 11: Search by ISBN using Promises
router.get('/books/:isbn', (req, res) => {
    axios.get(`http://localhost:3000/api/general/books/${req.params.isbn}`)
        .then(response => res.status(200).json(response.data))
        .catch(() => res.status(404).send("Book not found"));
});

// Task 12: Search by Author
router.get('/books/author/:author', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/general/books/author/${req.params.author}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send("Error fetching books by author");
    }
});

// Task 13: Search by Title
router.get('/books/title/:title', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/general/books/title/${req.params.title}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send("Error fetching books by title");
    }
});

module.exports = router;
