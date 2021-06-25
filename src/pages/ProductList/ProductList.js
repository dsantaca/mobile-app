import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

function ProductList(props) {
    return (
        <div>
            <header style={{backgroundColor: "blue"}}>
                <h2>ProductList</h2>
            </header>
            <div style={{backgroundColor: "green"}}>
                <div style={{backgroundColor: "red"}}>
                    Search
                </div>
                <div>
                    {props.data && props.data.map(function(model) {
                        return <ProductCard key={props.data.id} model={model} />
                    })}

                    {props.data && JSON.stringify(props.data, null, 4)}
                </div>

            </div>
        </div>
    );
}

export default ProductList;