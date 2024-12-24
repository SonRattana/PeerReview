const express = require('express');
const bodyParser = require('body-parser');

const generalRoutes = require('./routes/general');
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');
const asyncTaskRoutes = require('./routes/asyncTasks');

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Welcome to the Bookshop API!');
  });
app.use(bodyParser.json());


app.use('/api/general', generalRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/async', asyncTaskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
