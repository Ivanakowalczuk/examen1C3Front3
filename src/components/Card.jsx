import styles from './Card.module.css'
export const Card = (props) => {
  return (
    <div >
      <h2 className={styles.card}>Tu mascota {props.nombre} es un {props.animal}</h2>
      
       
      </div>
  )
}


