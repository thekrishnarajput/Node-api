const express = require('express');
const app = express();
const path = require('path');

const productModel = require('./model/productModel')

require('dotenv').config();
const PORT = process.env.PORT || 3000;
// const CustomerRouter = require("./routes/customer.routes");

app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/save', async (req, res, next) => {
    try {
        let Body = req.body;
        let productResult = await productModel.saveProduct(Body);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});