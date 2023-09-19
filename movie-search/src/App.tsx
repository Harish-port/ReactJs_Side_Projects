import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { CryptoInfo } from './models/Crypto';
import { setCrypto } from './Redux/Actions/cryptoActions';
import TableView from './Components/Table/TableView';

function App() {
  const dispatch = useDispatch();
  let response = () => {
    axios.get<CryptoInfo[]>('https://api.coingecko.com/api/v3/coins/').then((res) => {
      console.log(res.data, "Res");
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
      <TableView/>
    </div>
  );
}

export default App;
