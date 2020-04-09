import React from "react";
import { CardList } from "./components/card-list/card-list.components";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Hung">
          {this.state.monsters.map((monsters) => (
            <h1 key={monsters.id}>{monsters.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}
