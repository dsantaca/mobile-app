import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard'

function ProductList(props) {
    const history = useHistory();

    function handleClick(id) {
        history.push("/detail/"+id);
    }

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
                        return (
                            <div key={model.id} onClick={() => handleClick(model.id)}>
                                <ProductCard info={model} />
                            </div>
                        )
                    })}

                    {props.data && JSON.stringify(props.data, null, 4)}
                </div>

            </div>
        </div>
    );
}

export default ProductList;