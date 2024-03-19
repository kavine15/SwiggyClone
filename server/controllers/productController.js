const Product = require('../models/ProductModel');
const APIFeatures = require('../utils/apiFeatures');


//Get Products - /products
exports.getProducts = async (req, res, next)=>{
    const resPerPage = 20;
    
    let buildQuery = () => {
        return new APIFeatures(Product.find(), req.query).search().filter()
    }
    
    const filteredProductsCount = await buildQuery().query.countDocuments({})
    const totalProductsCount = await Product.countDocuments({});
    let productsCount = totalProductsCount;

    if(filteredProductsCount !== totalProductsCount) {
        productsCount = filteredProductsCount;
    }
    
    const products = await buildQuery().paginate(resPerPage).query;

    res.status(200).json({
        success : true,
        count: productsCount,
        resPerPage,
        products
    })
}

//Create Product - /product/new
exports.newProduct = async (req, res, next)=>{

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


//Get Single Product - /product/:id
exports.getSingleProduct = async(req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product not found', 400));
    }

    res.status(201).json({
        success: true,
        product
    })
}