require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const {router} = require("./controllers/authController")


connection();

app.use(express.json());
app.use(cors());



const products = require('./Routes/product');



app.use('/api',products);
app.use('/auth',router);





const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));