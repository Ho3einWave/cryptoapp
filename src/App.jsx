import "./App.css";
import "./Queries.css";
import { Component } from "react";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

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
        <Route path="/">
          <HomePage
            marketState={this.state.marketState}
            filteredData={filteredData}
            handleChange={this.handleChange}
          />
        </Route>
      </div>
    );
  }
}

export default App;
