import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function App() {
let [responseData, setResponseData] = useState('');
let [itemCart] = useState(0);

  useEffect(() => {
    axios({
      "method": "GET",
      "url": "https://front-test-api.herokuapp.com/api/product"
    })
      .then((response) => {
        setResponseData(response.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      })

  }, []);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1><Link to="/">Mobile Tech</Link></h1>
          {/* <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/detail/:productId" aria-current="page" >
              Product
            </Link>
          </Breadcrumbs> */}
          <div className="cartIcon">
            <ShoppingCartIcon/>
            {itemCart}
          </div>
            
        </div>

        <Switch>
          <Route exact path="/"
            render ={(props) => (
              <ProductList {...props} data={responseData} />
            )}>
          </Route>
          <Route path="/detail/:productId"
            render ={(props) => (
              <ProductDetail {...props} />
            )}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
