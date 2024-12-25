const express = require('express');
const router = express.Router();
const axios = require('axios');

// Task 10: Get all books using async/await
router.get('/books', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/general/books');
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send("Error fetching books");
    }
});

// Task 11: Search by ISBN using Promises
router.get('/books/:isbn', (req, res) => {
    const { isbn } = req.params;
    if (!isbn) {
        return res.status(400).send("ISBN is required");
    }
    axios.get(`http://localhost:3000/api/general/books/${isbn}`)
        .then(response => res.status(200).json(response.data))
        .catch(error => {
            console.error("Error fetching book by ISBN:", error);
            res.status(404).send("Book not found");
        });
});

// Task 12: Search by Author
router.get('/books/author/:author', async (req, res) => {
    const { author } = req.params;
    if (!author) {
        return res.status(400).send("Author name is required");
    }
    try {
        const response = await axios.get(`http://localhost:3000/api/general/books/author/${author}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching books by author:", error);
        res.status(500).send("Error fetching books by author");
    }
});

// Task 13: Search by Title
router.get('/books/title/:title', async (req, res) => {
    const { title } = req.params;
    if (!title) {
        return res.status(400).send("Title is required");
    }
    try {
        const response = await axios.get(`http://localhost:3000/api/general/books/title/${title}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching books by title:", error);
        res.status(500).send("Error fetching books by title");
    }
});

module.exports = router;
