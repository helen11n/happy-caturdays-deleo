
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  const navigationMenu = [
    "Inicio",
    "Para Michis",
    "Para Escalv@s",
    "Contacto",
    "Ingresar"
  ];
  return (
    <>
      <div>
        <Navbar navigationMenu={navigationMenu} />
      </div>

      <ItemListContainer />
    </>
  );
}

export default App;