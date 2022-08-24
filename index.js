const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/item-routes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/items', itemRoutes);

app.listen(process.env.PORT || 5000);
console.log("Connected");
