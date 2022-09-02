import React from "react";
import "./crypto-card.styles.css";
import { withRouter } from "react-router-dom";

const CryptoCard = ({ currency, history }) => {
  return (
    <div
      className="card"
      onClick={() => console.log(history.push(`/currency/${currency.id}`))}
    >
      <div className="details">
        <div className="identifier">
          <img
            src={`https://signalpardazgroup.com/${currency.icon}`}
            alt={currency.name}
          />
          <h3>{currency.name}</h3>
        </div>
        <div className="date">{currency.time}</div>
      </div>
      <div className="price">
        <div className="current-price">
          <div className="price-close">{`${currency.close}$`}</div>
          <div
            className={`change ${
              currency.chg24h.startsWith("-") ? "red" : "green"
            }`}
          >
            {`${currency.chg24h.slice(0, 5)}%`}
          </div>
        </div>
        <div className="change-icon">
          {currency.chg24h.startsWith("-") ? (
            <i className="bi bi-caret-down-fill"></i>
          ) : (
            <i className="bi bi-caret-up-fill"></i>
          )}
        </div>
      </div>
    </div>
  );
};
export default withRouter(CryptoCard);
