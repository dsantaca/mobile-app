import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre>
    </div>
  );
}

export default App;
