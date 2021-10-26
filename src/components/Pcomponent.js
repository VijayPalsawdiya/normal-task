import React, { Component } from 'react'
import Ccomponent from './Ccomponent';

class Pcomponent extends Component {

constructor(props) {
    super(props)

    this.state = {
         parentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this);

}

greetParent(childName){
    alert(`hello ${this.state.parentName} from ${childName}`);
}

    render() {
        return (
            <div>
                <Ccomponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Pcomponent
