const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect db
connectDB();

// Init Middleware

//Body Parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    `Server listening on port ${PORT}.`;
});
