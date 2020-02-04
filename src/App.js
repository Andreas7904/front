import React, { Component } from 'react';
import { render } from 'react-dom';
import { PriceList } from './components/PriceList';
import { Cart } from './components/Cart';
import { CartProvider } from './components/CartContext';

// cancelOrderHandler = () => {
//   alert('You clicked on cancel')
// }

const App = () => {

  return (
    <CartProvider>
      <div className='Layout'>
        <PriceList />
        <Cart 
        // clicked={this.cancelOrderHandler}
        />
      </div>
    </CartProvider>
  )
}
export default App;