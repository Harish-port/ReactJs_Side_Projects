import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { CryptoInfo } from './models/Crypto';
import { setCrypto } from './Redux/Actions/cryptoActions';
function App() {
  const dispatch = useDispatch();

  let response = () => {
    axios.get<CryptoInfo[]>('https://data.binance.com/api/v3/ticker/24hr').then((res) => {
      dispatch(setCrypto(res.data));
    }).catch((error) => {
      console.log(error, "error");
    })
  }

  useEffect(() => {
    response();
  }, [response])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
