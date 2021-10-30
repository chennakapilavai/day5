import React, { Component } from 'react'

export default class corporationbank extends Component {
    render(props) {
        return (
            <div>
                 <h1>CorporationBank account for{this.props.info.lastname}</h1>
            </div>
        )
    }
}
