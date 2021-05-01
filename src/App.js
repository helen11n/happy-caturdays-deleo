import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar } from "./components/Navbar"
import { Item } from "./components/Item"
import { ItemList } from "./components/ItemList"


function App() {
   const navigationMenu = [
    "Inicio",
    "Para Michis",
    "Para Escalv@s",
    "Contacto",
    "Ingresar"
  ]

  
  return (
    <>
          <div>
            <Navbar navigationMenu={navigationMenu} />
          </div>
          <div>
           <Item />
          </div>
          <div>
            <ItemList />
          </div>
    </>
  )
}
export default App;