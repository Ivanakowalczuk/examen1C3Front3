import {useState} from 'react'
import styles from './Form.module.css'

export const Form = ({agregarAnimal}) => {
  const [animal, setAnimal] = useState('')
  const [nombre, setNombre] = useState('')
  const [err, setError] = useState('')

  function handlesubmit(e){
    e.preventDefault()
    if (animal !== '' && nombre !== '' && nombre.length > 2 && animal.length > 5 && nombre[0] !== " " && animal[0] !== " " ){
    agregarAnimal(animal, nombre)
    setAnimal('')
    setNombre('')
    setError(false)
   } else{
    setError(true)
   }

  }
  return (
    <div>
    <form className={styles.form} onSubmit={handlesubmit}>
      <label>Ingresa el nombre de tu mascota</label>
      <input 
      type="text"  
      value={nombre}
      className={styles.input}
      onChange={(e) => setNombre(e.target.value)} />

      <label>¿Qué tipo de animal es tu mascota?</label>
      <input 
      type="text"  
      value={animal}
      className={styles.input}
      onChange={(e) => setAnimal(e.target.value)} />
       <button className={styles.button}>Agregar animal</button>
     </form>
    <p className={styles.error}>{err && "Por favor chequea que la información sea correcta"}</p> 
    </div>
  )
}


