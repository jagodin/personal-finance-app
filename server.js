const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    `Server listening on port ${PORT}.`;
});
