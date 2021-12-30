const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Send CORS Headers, useful if API is requested from a browser
app.use(cors());

// Parse request body to json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('completed')
});

app.listen(process.env.PORT, () => console.log('Gator app listening on port 3000!'));