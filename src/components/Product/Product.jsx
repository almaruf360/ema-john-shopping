import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'


const Product = (props) => {

    const { name, img, seller, price, ratings } = props.product;
    const handleAddCart = props.handleAddCart


    return (
        <div className='product'>

            <img src={img} />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className=''>Price: ${price}</p>
                <h4>Manufecturer: {seller}</h4>
                <p>Rating: {ratings}</p>
            </div>
            <div>
                <button onClick={() => handleAddCart(props.product)} 
                className='btn-cart'>Add To cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>

            </div>
        </div>
    );
};

export default Product;