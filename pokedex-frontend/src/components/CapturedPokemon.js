import React from 'react'
import axios from 'axios'

class CapturedPokemon extends React.Component {

    render() {
        return(
            <div>
                <h1>I am Captured Pokemon</h1>
                <input placeholder="Enter a Pokemon Name" id="pokemon-name"/>
                <input placeholder="Enter a Nickname for your Pokemon" id="pokemon-nickname"/>
                <button onClick={() => this.props.addCapturedPokemon()}>Click Me</button>
            </div>
        )
    }
}

export default CapturedPokemon