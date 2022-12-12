import './Image.css'

import { useEffect, useState } from "react"

const Image = ( id ) =>{
    
    const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + id.id
    const [image, setImage] = useState({})

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const [data] = await res.json()
            setImage(data)
        }
        fetchData()
    }, [id] )

  return (

    <div>
      <img src={image.url} className='img' />
    </div>
  )
}

export default Image