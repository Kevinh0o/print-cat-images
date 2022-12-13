import { useEffect } from "react"
import { useState } from "react"

import './Stars.css'
import cat from './cat-solid.svg'


function Stars( value ) {

    const [stars, setStars] = useState()

    useEffect(() => {
        setStars(value.value)
    }, [value] )

  return (
    <div>
        <div className="container">
            {stars > 0 && <img src={cat} className='cat'/>}
            {stars > 1 && <img src={cat} className='cat'/>}
            {stars > 2 && <img src={cat} className='cat'/>}
            {stars > 3 && <img src={cat} className='cat'/>}
            {stars > 4 && <img src={cat} className='cat'/>}
        </div>
    </div>
  )
}

export default Stars