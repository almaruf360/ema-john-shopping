import React from 'react';
import './Cart.css';



const Cart = ({cart}) => {

    // const cart = props.cart;
    // const {cart} = props; 


    let total = 0;
    let shipping = 0;


    for (let product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = total*5/100;
    const grandTotal = total + shipping + tax ;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${ total.toFixed(2) }</p>
            <p>Total Shipping: ${ shipping.toFixed(2) }</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${ grandTotal.toFixed(2) }</h4>


        </div>
    );
};
import './Cart.css';



export default Cart;            