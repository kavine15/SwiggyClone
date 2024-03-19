import Metadata from "./Metadata";
import Product from "./Product";
import React from "react";
import { getProducts } from "../actions/productActions";
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Loader from './Loader';
import Category from './Category'
import '../App.css'




export default function Home() {

    const { products,loading } = useSelector((state) => state.productsState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts)
    }, [dispatch]);


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