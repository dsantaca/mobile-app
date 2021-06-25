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

  }, [setResponseData, responseData]);

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">ProductDetail</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/"
            render ={(props) => (
              <ProductList {...props} data={responseData} />
            )}>
          </Route>
          <Route path="/detail">
            <ProductDetail />
          </Route>
        </Switch>

        <hr />
        
        {/* <pre>
          <code>
            {responseData && JSON.stringify(responseData, null, 4)}
          </code>
        </pre> */}
      </div>
    </Router>
  );
}

export default App;
