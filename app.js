const express = require('express');

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send("Sb bdhiya?");
})

app.listen(port, () => {
    console.log(`App is listening at https://localhost:${port}`)
})