const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/data', require('./routes/data'))

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Server listening at ${port}`);
