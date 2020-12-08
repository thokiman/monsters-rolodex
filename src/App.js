import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

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
      .then((users) => {
        console.log(users);
        return this.setState({ monsters: users }, () =>
          console.log("this is state//monsters: users :", this.state)
        );
      })
      .catch((e) => console.log(e));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      console.log("this is state//searchField: e.target.value", this.state);
    });
  };
  render() {
    //pipeline1
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder={"search monster"}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
