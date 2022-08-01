import React from 'react';
import './product.css'

const Products = (props) => {
    // console.log(props);
    return (
        <div className='singleProduct'>
            <div>
                <img alt='Sorry!!' src={props.products.img}></img>
            </div>
            <div className='productInfo'>
                <h3>{props.products.name}</h3>
                <p>Seller: {props.products.seller}</p>
                <h4>$: {props.products.wholePrice}</h4>
                <p>Only {props.products.stock} are left, order Soon</p>
                <button onClick={()=>props.addProducts(props.products)}> Add to cart </button>
            </div>
        </div>
    );
};

export default Products;