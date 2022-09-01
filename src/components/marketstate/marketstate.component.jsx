import React from "react";
import MoneyFormater from "../../utils/moneyFormater";
import "./marketstate.styles.css";
export const MarketState = ({ marketState }) => {
  console.log(marketState);
  const { numberOfCurrencies, totalMarketCap, totalVol24H, bitcoinDominance } =
    marketState || {};
  return (
    <div className="market-state">
      <div className="state">
        <span>Market Capital</span>
        <span> {totalMarketCap ? MoneyFormater(totalMarketCap) : 0}</span>
      </div>
      <div className="state">
        <span>Trade Value in 24H</span>
        <span>{totalVol24H ? MoneyFormater(totalVol24H) : 0}</span>
      </div>
      <div className="state">
        <span>Bitcoin Domainance</span>

        <span>{bitcoinDominance ? MoneyFormater(bitcoinDominance) : 0}</span>
      </div>
      <div className="state">
        <span>Number Of CryptoCurrencies</span>
        <span>{numberOfCurrencies ? numberOfCurrencies : 0}</span>
      </div>
    </div>
  );
};
