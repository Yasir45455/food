const express = require("express")
require("./dbConnect/db")
var bodyParser = require("body-parser");
var bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');

/*-------------------------------------MODELS--------------------------------------------*/ 

/*-------------------------------------ROUTES--------------------------------------------*/ 
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const categoryRoutes = require('./routes/categories')
const cartRoutes = require('./routes/cart')
const orderRoutes = require('./routes/order')
const addressRoutes = require('./routes/adress')
const promotionRoutes = require('./routes/promotions')
const promoImagesRoute = require('./routes/promoImages')
const app = express()
app.use(cors({ origin: 'http://localhost:3000' }));

const port = process.env.PORT || 3001;
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Parse application/json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome Brother');
});

app.use('/auth' , authRoutes)
app.use('/products' , productRoutes) 
app.use('/category' , categoryRoutes)
app.use('/cart' , cartRoutes)
app.use('/order' , orderRoutes)
app.use('/address' , addressRoutes)
app.use('/promotions' , promotionRoutes)
app.use('/promoimages' , promoImagesRoute)


module.exports = app;
