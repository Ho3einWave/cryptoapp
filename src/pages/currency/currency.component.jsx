import React from "react";
import "./currency.styles.css";
import MoneyFormater from "../../utils/moneyFormater";

import { CryptoProfile } from "../../components/crypto-profile/crypto-profile.component";
export class Currency extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currency: {},
    };
    this.props = props;
  }

  componentDidMount() {
    fetch(
      `https://api.hoseinwave.ir/v1/crypto?op=info&id=${this.props.match.params.id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ currency: data.data });
      });
  }

  render() {
    const {
      mrktCap,
      vol24h,
      chg24h,
      chg7d,
      toomanPrice,
      circulatingSupply,
      maxSupply,
      high,
      low,
      open,
    } = this.state.currency;
    return (
      <div className="currency">
        <CryptoProfile currency={this.state.currency} />
        <h3 className="ow-title">Overview</h3>
        <div className="overview">
          <div className="state">
            <span>Market Capital ($)</span>
            <span>{mrktCap ? MoneyFormater(mrktCap) : 0}</span>
          </div>
          <div className="state">
            <span>Trade Value in 24h ($)</span>
            <span>{vol24h ? MoneyFormater(vol24h) : 0}</span>
          </div>
          <div className="state">
            <span>Change in 24h</span>
            <span
              className={`${`${chg24h}`.startsWith("-") ? "red" : "green"}`}
            >
              {chg24h ? chg24h.toFixed(2) : 0}%
            </span>
          </div>
          <div className="state">
            <span>Change in 7Day</span>
            <span className={`${`${chg7d}`.startsWith("-") ? "red" : "green"}`}>
              {chg7d ? chg7d.toFixed(2) : 0}%
            </span>
          </div>
        </div>
        <div className="today-price">
          <h4>Price Details</h4>
          <div className="price-details">
            <span>Price in Toman</span>
            <span>{toomanPrice ? MoneyFormater(toomanPrice) : 0}</span>
          </div>
          <div className="price-details">
            <span>Circulating Supply</span>
            <span>
              {circulatingSupply ? MoneyFormater(circulatingSupply) : 0}
            </span>
          </div>
          <div className="price-details">
            <span>Total Supply</span>
            <span>{maxSupply ? MoneyFormater(maxSupply) : 0}</span>
          </div>
        </div>
        <div className="today-price">
          <h4>Today</h4>
          <div className="price-details">
            <span>Max Price</span>
            <span>{high ? high : 0} $</span>
          </div>
          <div className="price-details">
            <span>Min Price</span>
            <span>{low ? low : 0} $</span>
          </div>
          <div className="price-details">
            <span>First Price</span>
            <span>{open ? open : 0} $</span>
          </div>
        </div>
      </div>
    );
  }
}
