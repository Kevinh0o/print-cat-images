import { useEffect, useState } from "react"

const Traits = ( id ) => {

    const url = 'https://api.thecatapi.com/v1/breeds/' + id.id
    const [breed, setBreed] = useState({})

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const data = await res.json()
            setBreed(data)
        }    
        fetchData()
        console.log(breed)
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
        <a href={breed.wikipedia_url}> Learn more! </a>
            
    </div>
  )
}

export default Traits