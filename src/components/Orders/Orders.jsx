import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb (id);
    
    }

    const handleClearCart = () => {
        setCart ([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>

            <div className="review-container">
            {
                savedCart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem>)
            }

            </div>

            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}>

           <Link className='proceed-link' to="/checkout">
           <button className='btn-proceed'>proceed Checkout
           <FontAwesomeIcon icon={faArrowRight} />
           
           </button>
           </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Orders;