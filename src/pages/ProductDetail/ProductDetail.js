import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const  {productId} = useParams();
    let [modelData, setModelData] = useState('');

    useEffect(() => {
        axios({
        "method": "GET",
        "url": "https://front-test-api.herokuapp.com/api/product/"+productId,
        })
        .then((response) => {
            setModelData(response.data)
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
        })

    }, []);

    return (
        <div>
            <div style={{backgroundColor: "green"}}>
             <img src={modelData.imgUrl}></img>
             <div>
             Description
                 <p>Brand: {modelData.brand}</p>
                 <p>Model: {modelData.model}</p>
                 <p>Price: {modelData.price}</p>
                 <p>CPU: {modelData.cpu}</p>
                 <p>RAM: {modelData.ram}</p>
                 <p>OS: {modelData.os}</p>
                 <p>Screen Resolution: {modelData.displaySize}</p>
                 <p>Battery: {modelData.battery}</p>
                 <p>Primary Camera: {modelData.primaryCamera}</p>
                 <p>Secondary Camera: {modelData.secondaryCmera}</p>
                 <p>Dimensions: {modelData.dimentions}</p>
                 <p>Weight: {modelData.weight}</p>
             </div>
             <div>
                 Actions
                 {modelData && modelData.options.colors.map(function(color) {
                        return (
                            <div key={color.code}>
                            {color.name}
                            </div>
                        )
                    })
                 }
                 {modelData && modelData.options.storages.map(function(storage) {
                        return (
                            <div key={storage.code}>
                            {storage.name}
                            </div>
                        )
                    })
                 }
             </div>
            </div>
            {/* {modelData && JSON.stringify(modelData, null, 4)} */}
        </div>
    );
}

export default ProductDetail;