import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar } from "./components/Navbar"
import { ItemListContainer } from "./components/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer"

function App() {
   const navigationMenu = [
    "Inicio",
    "Para Michis",
    "Para Escalv@s",
    "Contacto",
    "Ingresar"
  ]
  return (
    
    <BrowserRouter>
      <Navbar navigationMenu={navigationMenu} />
        <Switch>
          <Route exact path="/" component={ItemListContainer}  />
          <Route path="/producto/:productId" component={ItemDetailContainer}  />
         
        </Switch>
    </BrowserRouter>
  )
}
export default App;