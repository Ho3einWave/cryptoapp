import React from "react";
import "./about.styles.css";
export const About = () => (
  <>
    <h1 className="title">Crypto App</h1>
    <p className="desc">
      <span className="app">CRYPTO APP</span> is CryptoCurrency Web App that
      show live price and 24h-changes with real data powered by{" "}
      <span className="signal">Signal Mobile App</span> Private Api with purpose
      of practicing while learning. you can download, modify, and use the source
      code from{" "}
      <span className="github">
        <a href="https://github.com/Ho3einWave/cryptoapp">Github</a>
      </span>
    </p>

    <h3 className="pwrd-by"> Powered By Signal</h3>
    <img
      className="pwrd-by-img"
      src="https://isignal.ir/wp-content/uploads/2019/05/Logo.png"
      alt="ُSignal Mobile App"
    />
  </>
);
