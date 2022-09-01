import "./App.css";
import { Component } from "react";
import { CryptoCard } from "./components/crypto-card/crypto-card.component";
import { MarketState } from "./components/marketstate/marketstate.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currenceis: {},
      marketState: {},
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.hoseinwave.ir/v1/crypto")
      .then((res) => res.json())
      .then((data) => this.setState({ currenceis: data.data }));
    fetch("https://api.hoseinwave.ir/v1/crypto?op=marketState")
      .then((res) => res.json())
      .then((data) => {
        console.log(this.state.marketState);
        this.setState({ marketState: data.data.data[0] });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { currenceis, searchField } = this.state;
    const filteredData = currenceis.MarketBest?.data.filter((crypto) => {
      return crypto.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="title">Crypto App</h1>
        <h4 className="subtitle">Market State</h4>
        <MarketState marketState={this.state.marketState} />
        <input
          className="search"
          type="search"
          placeholder="Search Crypto"
          onChange={this.handleChange}
        />
        <h4 className="subtitle">CryptoCurrencies</h4>

        {filteredData?.map((currency) => {
          return <CryptoCard currency={currency} key={currency.id} />;
        })}
      </div>
    );
  }
}

export default App;
