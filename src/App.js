
import './App.css';
import { Navbar } from './components/navbar';

function App() {
  const navigationMenu = [
    'Inicio', 'Para Michis', 'Para Escalv@s', 'Contacto'
  ]
  return (
    <div>
        <Navbar navigationMenu={navigationMenu}/>
    </div>
    
  );
}

export default App;
