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
    <div className="App">

      <SelectBreed setBreedID = { setBreed } />
      
      <Image id={ breed } />

      <Traits id={ breed } />

    </div>
  )
}

export default App
