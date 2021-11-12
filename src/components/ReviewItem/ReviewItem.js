import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity } = props.product;
    const reveiwItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '15px',
        paddingBottom: '20px',
        marginLeft: '200px'

    }
    return (
        <div style={reveiwItemStyle} className="review-item">
            <h3 className="product-name" >{name}</h3>
            <p>Quantity:{quantity}</p>
            <button className="main-button" >Remove</button>
        </div>
    );
};

export default ReviewItem;