import "./App.css";
import { Component } from "react";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { HomePage } from "./pages/homepage/homepage.component";
import { Currency } from "./pages/currency/currency.component";
import { About } from "./pages/about/about.component";
import { Route, Switch } from "react-router-dom";

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
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage
              marketState={this.state.marketState}
              filteredData={filteredData}
              handleChange={this.handleChange}
            />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/currency/:id" component={Currency} />
        </Switch>
      </div>
    );
  }
}

export default App;
