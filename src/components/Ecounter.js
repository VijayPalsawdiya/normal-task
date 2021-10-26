import React, { Component } from 'react'

class Ecounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0 
        }
    }
    
    Increment(){
        // this.setState({

        //     count: this.state.count + 1
        // },
        
        // () => {
        //     console.log(this.state.count);
        // }
        // )
        
        
        //prevState is better
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }
    
    Decrement(){
        this.setState({
            count: this.state.count - 1
        },
         () => {
             console.log(this.state.count);
         }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.Increment()}>Increment</button>
                <button onClick={() => this.Decrement()}>Dec</button>
            </div>
        )
    }
}

export default Ecounter
