import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar } from "./components/Navbar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemCount } from "./components/ItemCount"
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
        <ItemCount />
      </div>
      <div>
        <ItemList />
      </div>
    </>
  );
}
export default App;