import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

function ProductList(props) {
    const history = useHistory();
    const [products, setProducts] = useState(props.data);
    const [search, setSearch] = useState(" ");

    function handleClick(id) {
        history.push("/detail/"+id);
    }

    return (
        <div>
            <div className="modelsContainer">
                <div className="searchFilterContainer">
                    <input className="searchFilter" onChange= {e => {
                        const filtered = props.data && props.data.filter(product => {
                            return product.model.toLowerCase().includes(e.target.value.toLowerCase()) || product.brand.toLowerCase().includes(e.target.value.toLowerCase());
                        });
                        if (filtered !== "" || undefined){
                            setProducts(filtered);
                            setSearch(e.target.value);
                        }}
                    }
                    type="text"
                    value={search}/>
                </div>
                <div className="displayContainer">
                {products ? products && products.map(function(model) {
                        return (
                            <div key={model.id} onClick={() => handleClick(model.id)}>
                                <ProductCard info={model} />
                            </div>
                        )
                    }) : props.data && props.data.map(function(model) {
                        return (
                            <div key={model.id} onClick={() => handleClick(model.id)}>
                                <ProductCard info={model} />
                            </div>
                        )
                    })
                }
                </div>

            </div>
        </div>
    );
}

export default ProductList;