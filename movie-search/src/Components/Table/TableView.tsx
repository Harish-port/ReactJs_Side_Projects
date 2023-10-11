import React, { useState } from "react";
import "./TableView.scss";

export default function BasicTable() {
  return (
    <div className="market-content__coin-list">
      <div className="market-content__coin-list__top">
        <p>Coin</p>
        <p>Price</p>
        <p>24h Change</p>
        <p>Market Cap</p>
      </div>
      <div className="market-content__coin-list__row"></div>
    </div>
  );
} 
