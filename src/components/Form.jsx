import {useState} from 'react'

export const Form = ({agregarAnimal, agregarNombrePersona}) => {
  const [animal, setAnimal] = useState('')
  const [nombre, setNombre] = useState('')

  function handlesubmit(e){
    e.preventDefault()
    if (!animal) return
    agregarAnimal(animal, nombre)
       setAnimal('')
    setNombre('')
   }

  return (
    <div>
    <form onSubmit={handlesubmit}>
      <label>Ingresa el nombre de tu mascota</label>
      <input 
      type="text"  
      value={nombre}
      onChange={(e) => setNombre(e.target.value)} />

      <label>¿Qué tipo de animal es tu mascota?</label>
      <input 
      type="text"  
      value={animal}
      onChange={(e) => setAnimal(e.target.value)} />
       <button type='submit'>Agregar animal</button>
     </form>
    </div>
  )
}


