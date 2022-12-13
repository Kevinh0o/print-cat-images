import './Image.css'

import { useEffect, useState } from "react"

const Image = ( id ) =>{
    
    const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + id.id
    const [image, setImage] = useState({})
    const [loading, setLoading] = useState()

    useEffect(() => {
        async function fetchData(){
            setLoading(true)

            const res = await fetch(url)
            const [data] = await res.json()
            setImage(data)

            setLoading(false)
        }
        fetchData()
    }, [id] )

  return (

    <div>
      {loading === true && 
        <>
          <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></img>
        </>
      }
      {loading === false && 
        <>
          <img src={image.url} className='img' />
        </>
      }
      
    </div>
  )
}

export default Image