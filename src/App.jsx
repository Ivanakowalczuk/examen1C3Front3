import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Form/>
      <Card/>
    </div>
  )
}

export default App
