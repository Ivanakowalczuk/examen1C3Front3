import { useState } from 'react'
import './App.css'
import {Form} from './components/Form'
import {Card} from './components/Card'
import { getId } from './utils/getId'

function App() {
  const [animalesPreferidos, setAnimalesPreferidos] = useState([])


  function agregarAnimal(animal, nombre) {
  
    const nuevoAnimal = {
      id: getId(),
      animal,
      nombre,
    }
    setAnimalesPreferidos([...animalesPreferidos, nuevoAnimal])
  }
 
     return (
    <div className="App">
      <h1>Tu Mascota</h1>
      <Form agregarAnimal={agregarAnimal} />
      <div>
        {animalesPreferidos.map((animalPreferido) => {
          return (
            <Card
              key={animalPreferido.id}
              animal={animalPreferido.animal}
              nombre={animalPreferido.nombre}
              
                          />
          )
        })}
      </div>
    </div>
  )
}

export default App
