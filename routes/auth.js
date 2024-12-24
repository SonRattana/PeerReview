const express = require('express');
const router = express.Router();

const users = [];

// Task 6: Register new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        res.status(400).send("User already exists");
    } else {
        users.push({ username, password });
        res.status(201).send("User registered successfully");
    }
});

// Task 7: Login as registered user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.status(200).send("Login successful");
    } else {
        res.status(401).send("Invalid username or password");
    }
});

module.exports = router;
