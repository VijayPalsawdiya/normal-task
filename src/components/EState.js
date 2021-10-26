import React from 'react';
import { Component } from 'react';

class EState extends Component{
    constructor(){
        super()
        this.state = {
            mssg : "welcome"
        }
    }
    mssgChange(){
        this.setState({
            mssg : "TY"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.mssg}</h1>
                <button type="submit" onClick={() => this.mssgChange()}>click</button>
            </div>
        )
    }
}

export default EState