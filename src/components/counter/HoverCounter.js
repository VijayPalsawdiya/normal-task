import React, { Component } from 'react'
import UpdateComponent from './Hoc';

class HoverCounter extends Component{
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0,
    //     }
    // }

    // increment=()=>{
    //     this.setState(prevState => {
    //         return {count:prevState.count+1 }
    //     })
    // }
    
    render(){
        const {count, increment} = this.props;
        return(
            <div className="App">
                <h1><button onMouseOver={increment}>hover {count}</button></h1>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter)