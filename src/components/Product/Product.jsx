import React from 'react';
import './product.css'
const Product = (props) => {

    const { name, img, seller, quantity, price, ratings } = props.product;

    return (
        <div className='product'>
            
            <img src={img} />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <h4>Manufecturer: {seller}</h4>
                <p>Rating: {ratings}</p>
            </div>
            <div>
            <button className='btn-cart'>Add To cart</button>

            </div>
        </div>
    );
};

export default Product;