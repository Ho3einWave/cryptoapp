import React from "react";
import "./crypto-profile.styles.css";
export const CryptoProfile = ({ currency }) => (
  <div className="cc">
    <img src={`https://signalpardazgroup.com/${currency.icon}`} alt="" />
    <div className="cc-details first">
      <span>Name</span>
      <span>{currency.name}</span>
    </div>
    <div className="cc-details">
      <span>Symbol</span>
      <span>{currency.symbol}</span>
    </div>
    <div className="cc-details">
      <span>Persian name</span>
      <span className="persian-align">{currency.persianName}</span>
    </div>
    <div className="cc-details">
      <span>Unit</span>
      <span>{currency.unit}</span>
    </div>
    <div className="cc-details">
      <span>Price</span>
      <span>{currency.close}$</span>
    </div>
  </div>
);
