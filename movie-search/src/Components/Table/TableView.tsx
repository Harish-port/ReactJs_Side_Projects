import { useState } from "react";
import "./TableView.scss";
import { CryptoInfo, globalState } from "../../models/Crypto";
import { useSelector } from "react-redux";
export default function TableView() {
  const tableData = useSelector(
    (state: globalState) => state.allCryptoItems.crypto
  );

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tableData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(tableData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log(tableData, "table");

  const changeCPage = (number: number) => {
    setCurrentPage(number);
  };
  return (
    <div className="table-container" id="market">
      <h2>Market Update</h2>
      <div className="market-content__coin-list">
        <div className="market-content__coin-list__top">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div className="market-content__coin-list__row">
          {records.map((item:CryptoInfo) => (
            <div key={item.id}>
              <a href="#">
                <span>
                  <img src={item.image.small} alt="Bitcoin" /> {item.name}
                </span>
                <p>$ {item.market_data.current_price.usd}</p>
                <p
                  className={
                    "slider-coin__price " +
                    (Math.sign(
                      item.market_data
                        .market_cap_change_percentage_24h_in_currency.usd
                    ) === 1
                      ? "green-text"
                      : "red-text")
                  }
                >
                  {" "}
                  {item.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )}{" "}
                  %
                </p>
                <p>$ {item.market_data.market_cap.usd.toLocaleString()}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {numbers.map((number, i) => (
          <button
            className={`page-item ${currentPage === number ? "active" : " "}`}
            key={i}
            onClick={() => changeCPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
