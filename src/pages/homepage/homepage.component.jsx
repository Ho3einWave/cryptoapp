import React from "react";
import { CryptoCard } from "../../components/crypto-card/crypto-card.component";
import { MarketState } from "../../components/marketstate/marketstate.component";

export const HomePage = ({ marketState, filteredData, handleChange }) => (
  <>
    <h1 className="title">Crypto App</h1>
    <h4 className="subtitle">Market State</h4>
    <MarketState marketState={marketState} />
    <input
      className="search"
      type="search"
      placeholder="Search CryptoCurrency"
      onChange={handleChange}
    />
    <h4 className="subtitle">CryptoCurrencies</h4>
    <div className="cryto-container">
      {filteredData?.map((currency) => {
        return <CryptoCard currency={currency} key={currency.id} />;
      })}
    </div>
  </>
);
