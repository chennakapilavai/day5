import React, { Component } from 'react'

export default class states extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"chenna"
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({name:"chenna kapilavai"})
        },3000)
        return (
            <div>
              <h1>
                {this.state.name}
              </h1>

            </div>
        )
    }
}
