import React from 'react';
// import Products from '../product/Products';
import './cart.css'

const cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, produ)=> total + produ.price , 0)
    console.log(cart);
    // let total2 =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i]
    //     total2 =(total2 + product.price);
        
    // }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if(total > 10){
        shipping = 15.90
    }

    let tax =Number((total/10)).toFixed(2);
    let finalTotal =(total + shipping + tax)
    

    return (
        <div className='carts'>
            <h3>Order Summery:</h3>
            <p>Total Items Order: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Cost: {shipping} </p>
            <p>TAX / Vat: {tax}</p>
            <p>Total Price: {finalTotal}</p>
            {/* <p>Total Price: {total2}</p> */}
        </div>
    );
};

export default cart;