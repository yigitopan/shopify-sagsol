const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/order-routes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/order', orderRoutes);
app.listen(process.env.PORT || 5000);
console.log("Connected to DB");
