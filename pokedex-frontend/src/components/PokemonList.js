import React from 'react'
import Pokemon from './Pokemon'

class PokemonList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.pokemonList.map( ( e, i ) => {
                            return <Pokemon 
                                key={i}
                                name={e}
                                isCaptured={this.props.isCaptured}
                                getPokemonDetails={this.props.getPokemonDetails}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PokemonList