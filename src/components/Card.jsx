import styles from './Card.module.css'

export const Card = (props) => {
  return (
    <div >
      <h2>{props.nombre}</h2>
        <h2>tu animal preferido es: </h2>
        <p>{props.animal}</p>
       
      </div>
  )
}


