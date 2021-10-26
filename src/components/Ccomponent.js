import React from 'react'

function Ccomponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>click</button>
        </div>
    )
}

export default Ccomponent
