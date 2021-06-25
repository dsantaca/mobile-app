import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
let [responseData, setResponseData] = useState('');

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
        Mobile Tech
        <ul>
          <li>
            <Link to="/">Product List</Link>
          </li>
          <li>
            <Link to="/detail/:productId">Product Detail</Link>
          </li>
        </ul>

        <hr />

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
