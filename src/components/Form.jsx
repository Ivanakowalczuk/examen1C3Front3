import {useState} from 'react'

export const Form = ({agregarAnimal}) => {
  const [animal, setAnimal] = useState('')
  const [nombre, setNombre] = useState('')
  
  function handlesubmit(e){
    e.preventDefault()
    if (!animal) return
    agregarAnimal(animal)
    setAnimal('')
    setNombre('')
   }

  return (
    <div>
    <form onSubmit={handlesubmit}>
      <label>Ingresa tu nombre</label>
      <input 
      type="text"  
      value={nombre}
      onChange={(e) => setNombre(e.target.value)} />

      <label>¿Cuál es tu animal favorito?</label>
      <input 
      type="text"  
      value={animal}
      onChange={(e) => setAnimal(e.target.value)} />
       <button type='submit'>Agregar animal</button>
     </form>
    </div>
  )
}


