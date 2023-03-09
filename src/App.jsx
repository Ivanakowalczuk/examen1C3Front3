import { useState } from 'react'
import './App.css'
import {Form} from './components/Form'
import {Card} from './components/Card'
import { getId } from './utils/getId'

function App() {
  const [animalesPreferidos, setAnimalesPreferidos] = useState([])
  const [nombre, setNombre] = useState('')
  
  function agregarAnimal(animal) {
  
    const nuevoAnimal = {
      id: getId(),
      animal,
    }
    setAnimalesPreferidos([...animalesPreferidos, nuevoAnimal])
  }

     return (
    <div className="App">
      <h1>Tu Animal Preferido</h1>
      <Form agregarAnimal={agregarAnimal}/>
      <ul>
        {animalesPreferidos.map((animalPreferido) => {
          return (
            <Card
              key={animalPreferido.id}
              animal={animalPreferido.animal}
                          />
          )
        })}
      </ul>
    </div>
  )
}

export default App
