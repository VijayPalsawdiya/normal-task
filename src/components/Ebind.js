import React, { Component } from 'react'

class Ebind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mssg : "hello"
        }
        this.HandlerMssg = this.HandlerMssg.bind(this);
    }

    HandlerMssg(){
        this.setState({
            mssg: "bye"
        })
    }
    

    render() {
        return (
            <div>
                <h2>{this.state.mssg}</h2>
                <button onClick={this.HandlerMssg}>Click</button>            
            </div>
        )
    }
}

export default Ebind
