const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const resFile = require('./res.json');

const app = express();

// Send CORS Headers, useful if API is requested from a browser
app.use(cors());

// Parse request body to json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req);
  res.send('completed')
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));