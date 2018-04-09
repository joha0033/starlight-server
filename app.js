const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
<<<<<<< HEAD

=======
>>>>>>> dev
const app = express()



<<<<<<< HEAD
=======
app.use(cors())
app.use(morgan('dev'));
>>>>>>> dev
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'));


// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });


app.use('/data', require('./routes/data'))


const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Server listening at ${port}`);
