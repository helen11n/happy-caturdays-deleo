import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar } from "./components/Navbar"
import { ItemListContainer } from "./components/item/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ItemDetailContainer } from "./components/item/ItemDetailContainer"
import { Home } from "./components/Home"
import { Footer } from "./components/footer/Footer"

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
          <Route exact path="/" component={Home} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/producto/:productId" component={ItemDetailContainer} />
         
        </Switch>
      <Footer />  
    </BrowserRouter>

  )
}
export default App;