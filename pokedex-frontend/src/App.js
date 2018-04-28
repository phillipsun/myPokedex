import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import Headline from './components/Headline'
import CapturedPokemon from './components/CapturedPokemon'

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
    this.addCapturedPokemon = this.addCapturedPokemon.bind(this)
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



  addCapturedPokemon() {
    let nameInput = document.getElementById('pokemon-name').value
    let nicknameInput = document.getElementById('pokemon-nickname').value
    axios.post('/api/capturedpokemon')
      .then( (req, res) => console.log(res.data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to myPokedex</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Headline text="Pokemon Index" />
              <PokemonList
                pokemonList={this.state.pokemonList}
                getPokemonDetails={this.getPokemonDetails}
              />
            </div>
            <div className="col-md-4">
              <Headline text="Pokemon Details" />
              <PokemonDetails 
                details={this.state.pokemonDetails}
                addPokemonHandler={this.addPokemonHandler}
              />
            </div>
            <div className="col-md-4 captured">
              <Headline text="Captured Pokemon" />
              {/* <PokemonList
                pokemonList={this.state.capturedPokemonList}
                getPokemonDetails={this.getPokemonDetails}
                isCaptured
              /> */}
              <CapturedPokemon 
                addCapturedPokemon={this.addCapturedPokemon}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
