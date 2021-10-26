import React from 'react'

export default function Hero({heroname}) {
    if(heroname === 'Joker'){
        throw new Error('Not a hero');
    }
    return (
        <div>
            {heroname}
        </div>
    )
}
