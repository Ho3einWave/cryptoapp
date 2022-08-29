import "./App.css";
import { Component } from "react";
import { CryptoCard } from "./components/crypto-card/crypto-card.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.hoseinwave.ir/v1/crypto")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, searchField } = this.state;
    const filteredData = data.MarketBest?.data.filter((crypto) => {
      return crypto.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="title">Crypto App</h1>
        <input
          className="search"
          type="search"
          placeholder="Search Crypto"
          onChange={this.handleChange}
        />
        {filteredData?.map((currency) => {
          return <CryptoCard currency={currency} key={currency.id} />;
        })}
      </div>
    );
  }
}

export default App;
