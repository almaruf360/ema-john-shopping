import React from 'react';
import './Cart.css';



const Cart = ({cart}) => {

    // const cart = props.cart;
    // const {cart} = props; 


    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (let product of cart){
        if (product.quantity){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    const tax = total*5/100;
    const grandTotal = total + shipping + tax ;

    return (
        <div className='cart'>
            <h4 className='font-bold underline mb-10 text-2xl'>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${ total.toFixed(2) }</p>
            <p>Total Shipping: ${ shipping.toFixed(2) }</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${ grandTotal.toFixed(2) }</h4>


        </div>
    );
};
import './Cart.css';



export default Cart;            