import "./Main.scss";
import { useSelector } from "react-redux";
import { CryptoInfo, globalState } from "../../models/Crypto";
import { useNavigate } from "react-router";
function Main() {
  const cryptoData = useSelector(
    (state: globalState) => state.allCryptoItems.crypto
  );
  const filterCryptoData = cryptoData.slice(0, 4);
  const navigate = useNavigate();
  const redirectTo =
    (id: number) => (event: React.MouseEvent<HTMLInputElement>) => {
      console.log(event, "harish");

      navigate(`/coin/${id}`);
    };
  return (
    <div className="main-container">
      <div className="main-content">
        <h1>
          Track and Trade
          <br /> <span>Crypto currencies</span>
        </h1>
        <div className="crypto-list">
          {filterCryptoData.map((item: CryptoInfo) => (
            <div
              className="coin-view"
              key={item.id}
              onClick={redirectTo(item.id)}
            >
              <img src={item.image.large} className="coin-img" alt="NA" />
              <div className="coin-name">
                {item.name}
                <span
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
                </span>
              </div>
              <div className="coin-price">
                ${" "}
                {item.market_data.current_price.usd.toFixed(2).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
