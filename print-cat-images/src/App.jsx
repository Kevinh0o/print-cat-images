import './App.css'

import { useState } from 'react'

import SelectBreed from './Components/SelectBreed'
import Image from './Components/Image'
import Traits from './Components/traits/Traits'


function App() {
  const [breed, setBreed] = useState('')

  const setBreedID = (a) =>{
    setBreed(a)
  }

  return (
    <div className="app">
      <div className='content'>

      <SelectBreed setBreedID = { setBreed } />
      { breed == '' &&
        <>
          Select Breed. ^
        </> 
      }

      { breed != '' && 
        <>
          <Image id={ breed } />

          <Traits id={ breed } />
        </>
      }
      


      </div>
    </div>
  )
}

export default App
