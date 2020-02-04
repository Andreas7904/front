import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import '../App.css'


export const Cart = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    const [order, setOrder] = useState ([])

    const cancelOrderHandler = () => {
        alert('You clicked on cancel')
    }

    const OrderHandler = () => {
        setOrder([...order,
        {
            price: totalPrice,
            items: cart,
        }])

    }
    console.log(order)
    return (
        <div className='Cart'>
            <span>items in cart : {cart.length}</span>
            <br />
            <span>total price : {totalPrice}</span> <br />
            <button onClick={cancelOrderHandler}>Cancel</button>
            <button onClick={OrderHandler}>Order</button>
        </div>
    )
}