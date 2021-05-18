import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar } from "./components/navbar/Navbar"
import { ItemListContainer } from "./components/item/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ItemDetailContainer } from "./components/item/ItemDetailContainer"
import { Home } from "./components/Home"
import { Footer } from "./components/footer/Footer"
import { Cart } from "./components/cart/Cart"
import { CartProvider } from "./context/cartContext"

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
      <CartProvider >
        <Navbar navigationMenu={navigationMenu} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/producto/:productId" component={ItemDetailContainer} />
            <Route path="/contacto" />
            <Route path="/ingresar" />
            <Route path="/cart" component={Cart} />
          </Switch>
        <Footer />  
      </CartProvider>
    </BrowserRouter>

  )
}
export default App;