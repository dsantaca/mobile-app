import React from 'react';
import './ProductCard.scss';

function ProductCard(props) {
    return (
        <div className="modelContainer">
            <img className="modelImage" src={props.info.imgUrl}></img>
            <p className="modelName">{props.info.brand} {props.info.model}</p>
            <p className="modelPrice">{props.info.price} €</p>
        </div>
    );
}

export default ProductCard;