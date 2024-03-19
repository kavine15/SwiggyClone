import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

function Product({product}) {
    return (
        <>
        <br/>
        <br/>
        <Link to={`/product/${product._id}`}>
            <div className="cards-container">   
                <div className="card">
                    <div className="card-media" style={{ backgroundImage: `url(${product.images})` }}>
                        <div className="discount">40% OFF<p>Up&#x20b9; </p></div>
                        <div className="pro-discount">PRO 15% OFF</div>
                        <div className="delivery-time">{product.deliverytime}</div>
                        <div className="bookmark"></div>
                    </div>
                    <div className="card-description">
                        <div className="about-place">
                            <div className="place">
                                <p className="place-name">{product.name}</p>
                                <p className="place-speciality">{product.category}</p>
                                <p className="place-speciality">{product.hotelname}</p>
                            </div>
                            <div className="place-review">
                                <p className="rating">{product.ratings} &#x2605;</p>
                                <p className="per-person"> &#x20b9; {product.price}               per one</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Product