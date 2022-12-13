import { useEffect, useState } from "react"
import Stars from "./Stars"

import './Stats.css'

const Stats = ( {statsChange} ) => {

    const [star, setStar] = useState()


  return (
    <div>
        <ul>

            <li className="list">
                <p> Adaptability : </p>
                <Stars value={ statsChange.adaptability }/>
            </li>
            <li className="list"> 
                <p> Affection level : </p>
                <Stars value={ statsChange.affection_level }/>
            </li>
            <li className="list">
                <p> Child friendly : </p>
                <Stars value={ statsChange.child_friendly }/>
            </li>
            <li className="list">
                <p> Dog friendly : </p>
                <Stars value={ statsChange.adaptability }/>
            </li>
            <li className="list">
                <p> Energy level : </p>
                <Stars value={ statsChange.energy_level }/>
            </li>

        </ul>
    </div>
  )
}

export default Stats