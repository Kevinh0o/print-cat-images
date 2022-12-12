import { useEffect, useState } from "react"
import Stars from "./Stars"

const Stats = ( {statsChange} ) => {

    const [star, setStar] = useState()


  return (
    <div>
        <ul>

            <li>
                <p> Adaptability : </p>
                <Stars value={ statsChange.adaptability }/>
            </li>
            <li>
                <p> Affection level : </p>
                <Stars value={ statsChange.affection_level }/>
            </li>
            <li>
                <p> Child friendly : </p>
                <Stars value={ statsChange.child_friendly }/>
            </li>
            <li>
                <p> Dog friendly : </p>
                <Stars value={ statsChange.adaptability }/>
            </li>
            <li>
                <p> Energy level : </p>
                <Stars value={ statsChange.energy_level }/>
            </li>

        </ul>
    </div>
  )
}

export default Stats