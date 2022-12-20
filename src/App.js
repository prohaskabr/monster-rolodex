import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    var url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users };
      }, () => {
        console.log('load completed');
      }));
  }

  onSearchChanged = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLocaleLowerCase() }
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChanged } = this;

    const filteredMonster = monsters.filter((data) => {
      return data.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox defaultText='search monsters' onChangeHandler={onSearchChanged} />
        <CardList items={filteredMonster} />
      </div>
    );
  }
}

export default App;
