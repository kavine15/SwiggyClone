import Metadata from "./Metadata";
import Product from "./Product";
import React from "react";
import { getProducts } from "../actions/productActions";
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Loader from './Loader';
import Category from './Category'
import '../App.css'
import { useParams } from "react-router-dom";




export default function Home() {
    const { keyword } = useParams();
    const { products,loading } = useSelector((state) => state.productsState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(keyword,getProducts)
    }, [keyword,dispatch]);


    return (
        <>
                    
            {loading ? <Loader /> :
            
                <div className="home">
                
                      <Category/>
                    <Metadata title={'Food Products'} />
                   
                    <br/>
                    <div className="foodcontainer" id="products">
                       
                        {
                            products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))
                        }
                     
                    </div>
                </div>
            }
        </>
    )
}