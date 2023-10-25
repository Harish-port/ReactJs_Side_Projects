import "./Main.scss";
import { useSelector } from "react-redux";

function Main() {
  const cryptoData = useSelector(
    (state: RootState) => state.allCryptoItems.crypto
  );
  const filterCryptoData = cryptoData.slice(0, 4);
  return (
    <div className="main-container">
      <div className="main-content">
        <h1>
          Track and Trade
          <br /> <span>Crypto currencies</span>
        </h1>
        <div className="crypto-list">
          {filterCryptoData.map((item: any) => (
            <div className="coin-view">
              <img src={item.image.large} className="coin-img"></img>
              <div className="coin-name">{item.name}</div>
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
              <div className="coin-price">
                $ {item.market_data.current_price.usd.toFixed(2)}
              </div>
            </div>
          ))}

          <div className="coin-view">
            <div className="coin-img">image</div>
            <div className="coin-name">name</div>
            <div className="coin-price">2323</div>
          </div>
          <div className="coin-view">
            <div className="coin-img">image</div>
            <div className="coin-name">name</div>
            <div className="coin-price">2323</div>
          </div>
          <div className="coin-view">
            <div className="coin-img">image</div>
            <div className="coin-name">name</div>
            <div className="coin-price">2323</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
