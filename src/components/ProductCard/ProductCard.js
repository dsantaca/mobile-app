import React from 'react';

function ProductCard(props) {
    return (
        <div>
            <img src={props.info.imgUrl}></img>
            {props.info.brand}
            {props.info.model}
            <h2>{props.info.price}</h2>
        </div>
    );
}

export default ProductCard;