import "./App.css";
import { Component } from "react";
import { CryptoCard } from "./components/crypto-card/crypto-card.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch("https://api.hoseinwave.ir/v1/crypto")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.data }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Crypto App</h1>
        {this.state.data.MarketBest?.data.map((currency) => {
          return <CryptoCard currency={currency} key={currency.id} />;
        })}
      </div>
    );
  }
}

export default App;
