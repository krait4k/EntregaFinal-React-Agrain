import { useState } from 'react'
import ItemListContainerComponent from './Components/ItemListContainerComponent/ItemListContainerComponent'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainRouter from './routes/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemListContainerComponent greeting={"Hola, Soy un mensaje."}/>
      <MainRouter />
    </>
  )
}

export default App