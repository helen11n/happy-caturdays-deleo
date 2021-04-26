import "./App.scss"
import { Navbar } from "./components/Navbar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemCount } from "./components/ItemCount";

function App() {
   const navigationMenu = [
    "Inicio",
    "Para Michis",
    "Para Escalv@s",
    "Contacto",
    "Ingresar"
  ]

  const mensajeHome = "Encontrá todo para vos y su Alteza";
  return (
    <>
      <div>
        <Navbar navigationMenu={navigationMenu} />
      </div>
      <ItemListContainer mensajeHome={mensajeHome} />
      <div>
        <ItemCount />
      </div>
    </>
  );
}
export default App;