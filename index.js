const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

let app = express();

app.get("/", (req, res) => {
    res.send("It works!!!");
});

app.listen(PORT, () => console.log(`App running at :${PORT}`));