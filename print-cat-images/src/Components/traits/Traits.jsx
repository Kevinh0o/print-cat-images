import { useEffect, useState } from "react"
import Stats from "./Stats"

const Traits = ( id ) => {

    const url = 'https://api.thecatapi.com/v1/breeds/' + id.id
    const [breed, setBreed] = useState({})

    const statsChange = () =>{
        const res = breed
        return res
    }

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const data = await res.json()
            setBreed(data)
        }    
        fetchData()
        statsChange()
    }, [id] )

  return (

    <div> 
        <h1>
            {breed.name}
        </h1>
        <p>
            {breed.description}
        </p>
        <p>
            {breed.temperament}
        </p>
        <div>
            <Stats statsChange={ statsChange() }/>
        </div>
        <a href={breed.wikipedia_url}> 
            Learn more! 
        </a>
    </div>
  )
}

export default Traits