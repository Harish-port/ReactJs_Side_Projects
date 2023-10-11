import React, { useState } from "react";
import "./TableView.scss";
import { useSelector } from "react-redux";

export default function BasicTable() {
  const tableData = useSelector<RootState>(
    (state:RootState) => state.allCryptoItems.crypto
  );
  console.log(tableData, "table");

  return (
    <div className="table-container">
      <h2>Market Update</h2>
      <div className="market-content__coin-list">
        <div className="market-content__coin-list__top">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div className="market-content__coin-list__row">
          {
            tableData.map((item)=>(
              <div>
                      
              </div>
            ))
          }
          <a href="#">
            <span>
              <img
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                alt="Bitcoin"
              />{" "}
              Bitcoin
            </span>
            <p>$ 27160.00</p>
            <p className="slider-coin__price red-text">$ 27160.00</p>
            <p>$ 27160.00</p>
          </a>
        </div>
      </div>
    </div>
  );
}
