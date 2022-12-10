import { useEffect, useState } from "react"

const Image = ( id ) =>{
    
    const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + id.id
    const [image, setImage] = useState({})

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const data = res.json()
            setImage(data)
        }
        fetchData()
        console.log(image)
        const { id } = image
        console.log(id)
    }, [id] )

  return (

    <div>
    </div>
  )
}

export default Image