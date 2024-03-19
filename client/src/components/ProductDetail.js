import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import '../App.css'
import Metadata from './Metadata';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.productState);
  useEffect(() => {
    dispatch(getProduct(id))
  }, [id, dispatch])

  return (
    <>   
      {loading ? <Loader /> :
      <div>
       <Metadata title={product.name} />
       <div className='uploaddiv1'>
      <img className='uploaddiv' src={product.images} alt=""/>
    </div>
      <div className='div1'>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>{product.hotelname} 4.5 Km</p>
        <p>{product.description}</p>
        <hr></hr>
        <h1>{product.deliverytime}</h1>
        <h1>{product.price} for two</h1>
        <button className='button'> ADD CARD</button>
      </div>

      </div>
      }
    </>
  );
};

export default ProductDetail;