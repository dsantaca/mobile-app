import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail() {
    const  {productId} = useParams();
    let [modelData, setModelData] = useState('');
    let [colorSelected, setColorSelected] = useState('');
    let [storageSelected, setStorageSelected] = useState('');

    useEffect(() => {
        axios({
        "method": "GET",
        "url": "https://front-test-api.herokuapp.com/api/product/"+productId,
        })
        .then((response) => {
            setModelData(response.data);
            setColorSelected(response.data.options.colors[0].code);
            setStorageSelected(response.data.options.storages[0].code);
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
        })

    }, []);

    function handleClick(){
        axios({
            "method": "POST",
            "url": "https://front-test-api.herokuapp.com/api/cart",
            data: {
                id: productId,
                colorCode: colorSelected,
                storageCode: storageSelected
            }
        });
    }

    function handleColors(code){
        setColorSelected(code);
    }

    function handleStorages(code){
        setStorageSelected(code);
    }

    return (
        <div>
            <div className="detailsContainer">
             <div className="imageContainer">
                <img src={modelData.imgUrl}></img>
             </div>
             <div className="infoContainer">
                <div className="details">
                    <table>
                        <tbody>
                            <tr>
                                <th>Brand</th>
                                <td>{modelData.brand}</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>{modelData.model}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>{modelData.price} €</td>
                            </tr>
                            <tr>
                                <th>CPU</th>
                                <td>{modelData.cpu}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{modelData.ram}</td>
                            </tr>
                            <tr>
                                <th>OS</th>
                                <td>{modelData.os}</td>
                            </tr>
                            <tr>
                                <th>Screen Resolution</th>
                                <td>{modelData.displaySize}</td>
                            </tr>
                            <tr>
                                <th>Battery</th>
                                <td>{modelData.battery}</td>
                            </tr>
                            <tr>
                                <th>Front Camera</th>
                                <td>{modelData.primaryCamera}</td>
                            </tr>
                            <tr>
                                <th>Rear Camera</th>
                                <td>{modelData.secondaryCmera}</td>
                            </tr>
                            <tr>
                                <th>Dimensions</th>
                                <td>{modelData.dimentions}</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>{modelData.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="actions">
                    <p className="actionTitle">Colors</p>
                    {modelData && modelData.options.colors.map(function(color) {
                            return (
                                <button className="colorPill" key={color.code} onClick={() => handleColors(color.code)}>
                                    {color.name}
                                </button>
                            )
                        })
                    }
                    <p className="actionTitle">Storage</p>
                    {modelData && modelData.options.storages.map(function(storage) {
                            return (
                                <button className="storagePill" key={storage.code} onClick={() => handleStorages(storage.code)}>
                                    {storage.name}
                                </button>
                            )
                        })
                    }
                    <button className="colorPill addButton" onClick={handleClick}>
                        Add
                    </button>
                </div>
             </div>
            </div>
        </div>
    );
}

export default ProductDetail;