import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './shop.css'
import Product from '../product/Products'
import Cart from '../cart/Cart'

const Shop = () => {

    const [fakeData, setfakeData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        // fetch('../../fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setfakeData(data))
    }, [])

    // const shuffle =a => {
    //     for (let i = 0; i< a.length; i--) {
    //       let j = Math.floor(Math.random().i);
    //       [a[i-1], a[j]] = [a[j], a[i-1]];
           
    //     }
    // }

    // shuffle(fakeData)
    const fak = fakeData.slice(0, 10)
    const [cart, setCart] = useState([])
    const addProducts = (products) => {
        console.log("Products are added", products)
        const newCart = [...cart, products];
        setCart(newCart)
    }

    return (
        <div className='shopContainer'>
            <div className='products'>
                {
                    fak.map(pd => <Product
                        addProducts={addProducts}
                        products={pd}
                    ></Product>)
                }
            </div>
            <div className='cart'>
                <h1>হিসাব বিভাগ!!!</h1>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;