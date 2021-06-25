import React from 'react';

function ProductCard(props) {
    return (
        <div>
            <img src={props.model.imgUrl}></img>
            {props.model.brand}
            {props.model.model}
            <h2>{props.model.price}</h2>
        </div>
    );
}

export default ProductCard;