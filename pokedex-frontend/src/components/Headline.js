import React from 'react'

class Headline extends React.Component {

    render() {
        return (
            <h1>{this.props.text}</h1>
        )
    }
}

export default Headline