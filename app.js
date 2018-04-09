const express = require('express')

const app = express()

app.use('/data', require('./routes/data'))

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Server listening at ${port}`);
