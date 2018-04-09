const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()



app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json())


app.use('/data', require('./routes/data'))

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Server listening at ${port}`);
