import React, { Component } from 'react'
import UpdateComponent from './Hoc';

class ClickedCounter extends Component{
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
            <div>
                <h3><button onClick={increment}>incre {count} clicked</button></h3>
            </div>
        )
    }
}

export default UpdateComponent(ClickedCounter) 