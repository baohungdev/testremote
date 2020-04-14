import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/searc-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  
  render = () => {
    const filteredMonster = this.SearchFilter();
    return (
    <div className="App">
      <h1>Monster Roledex</h1>
      <SearchBox placeholder="search Monster"
                 handleChange={this.handleChange()}
      />
      <CardList monsters={filteredMonster} />
    </div>
  )};

  handleChange() {
    return (e) => this.setState({searchField: e.target.value });
  }

  SearchFilter() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return filteredMonsters;
  }
}

export default App;
