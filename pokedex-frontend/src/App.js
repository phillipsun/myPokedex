import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'

class App extends Component {

  constructor() {
    super() 

    this.state = {
      pokemonDetails: {},
      pokemonList: [],
      capturedPokemonList: []
    }

    this.getPokemonDetails = this.getPokemonDetails.bind(this)
    this.addPokemonHandler = this.addPokemonHandler.bind(this)
  }

  componentDidMount() {
      axios.get('/api/pokemon')
      .then( res => {
          this.setState({
              pokemonList: res.data
          })
      })
      axios.get('/api/capturedpokemon')
      .then( res => {
        this.setState({
          capturedPokemonList: res.data
        })
      })
  }

  getPokemonDetails(p) {
    this.setState({
      pokemonDetails: p
    })
  }

  addPokemonHandler(p) {
    this.setState({
      capturedPokemonList: this.state.capturedPokemonList.concat(p)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to myPokedex</h1>
        </header>
        <PokemonList
          header="Pokemon Index"
          pokemonList={this.state.pokemonList}
          getPokemonDetails={this.getPokemonDetails}
        />
        <PokemonDetails 
          details={this.state.pokemonDetails}
          addPokemonHandler={this.addPokemonHandler}
        />
        <PokemonList
          header="Captured Pokemon"
          pokemonList={this.state.capturedPokemonList}
          getPokemonDetails={this.getPokemonDetails}
          isCaptured
        />
      </div>
    );
  }
}

export default App;
