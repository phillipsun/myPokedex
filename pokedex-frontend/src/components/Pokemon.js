import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {

    constructor(props) {
        super(props)

        this.getDetailsHandler = this.getDetailsHandler.bind(this);
        this.deleteFromCapturedHandler = this.deleteFromCapturedHandler.bind(this)
    }

    getDetailsHandler(e) {
        axios.get('https://pokeapi.co/api/v2/pokemon/' +  e.toLowerCase())
        .then( res => this.props.getPokemonDetails(res.data))
    }

    deleteFromCapturedHandler(e) {
        axios.post('/api/capturedpokemon/delete', {
            params: {
                pokemon: {
                    name: e
                }
            }
        })
        .then( res => () => this.addPokemon(res.data))
    }

    // display the 'delete' button if the isCaptured is 
    renderButton() {
        if(this.props.isCaptured) {
            return (<button onClick={ () => this.deleteFromCapturedHandler(this.props.name)}>Delete</button>)
        }
    }

    render() {
        return(
            <div>
                <li
                    onClick={() => this.getDetailsHandler(this.props.name)}
                >
                    {this.props.name}
                </li>
                {this.renderButton()}
            </div>
        )
    }
}

export default Pokemon