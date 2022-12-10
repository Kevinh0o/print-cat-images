import { useEffect, useState } from "react"

const SelectBreed = ( { setBreedID } ) => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    const [breedList, setBreedList] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const data = await res.json()
            setBreedList(data)
        }    
        fetchData()
    }, [] )

    const handleChange = (e) =>{
        setBreedID(e.target.value)
    }

  return (
    <div>
        <form>
            <select onClick={ handleChange }>
                <option value='empty'> Select Breed </option>
                {breedList.map((breed)=>{
                    return(
                        <option 
                            key={breed.id} 
                            value={breed.id}>
                            {breed.name}
                        </option>)
                })}
            </select>
        </form>
    </div>
  )
}

export default SelectBreed