import React from 'react'
import axios from 'axios'

class PokemonDetails extends React.Component {

    constructor(props) {
        super(props)

        this.addToCaptured = this.addToCaptured.bind(this)
        this.addPokemon = this.addPokemon.bind(this);
    }

    addToCaptured(e) {
        axios.post('/api/capturedpokemon/add', {
            params: {
                pokemon: {
                    name: e.name,
                    nickname: '',
                    height: e.height,
                    weight: e.weight
                }
            }
        })
        .then(res => () => this.addPokemon(res.data))
    }

    addPokemon(pokemon) {
        this.props.addPokemonHandler(pokemon.name)
    }

    render() {
        return(
            <div>
                <p>Pokemon Species: {this.props.details.name}</p>
                <p>Height: {this.props.details.height}</p>
                <p>Weight: {this.props.details.weight}</p>
                <button onClick={() => this.addToCaptured(this.props.details) }>Add</button>
            </div>
        )
    }
}

export default PokemonDetails