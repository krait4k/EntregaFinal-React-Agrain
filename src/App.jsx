import { useState } from 'react'
import NavBarComponent from './Components/NavBarComponent/NavBarComponent'
import ItemListContainerComponent from './Components/ItemListContainerComponent/ItemListContainerComponent'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComponent/>
      <ItemListContainerComponent greeting={"Hola, Soy un mensaje."}/>

    </>
  )
}

export default App