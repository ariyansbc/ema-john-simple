import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product" >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name" >{name}</h3>
                <p> <small>By:{seller}</small> </p>
                <p>${price}</p>
                <p> <small>Only {stock} left in stock-Order Soon</small> </p>
                <button className="main-button" 
                  onClick={()=>props.handleAddProduct(props.product)}
                > 
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                    Add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;