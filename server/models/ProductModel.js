const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: [
                'Pizzas',
                'Briyani',
                'Burger',
                'South Indian'
            ],
            message : "Please select correct category"
        }
    },
    hotelname: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    deliverytime: {
        type: String,
        required: [true, "Please enter product Delivery Time"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.Types.ObjectId
    }
    ,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema