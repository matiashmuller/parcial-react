import './App.css';
//importo componente para que esté disponible para utilizarlo
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
//importar hook
import { useState } from 'react';

function App() {

  //Creamos hook (este es de estado) [nombre de cte, función modificadora]
  const [servicios, agregarServicio] = useState(
    //Crear lista (de servicios en este caso), entre llaves sus valores
    [
      { id: 1, nombre: "Goya", precio: 2500 },
      { id: 2, nombre: "Dalí", precio: 2000 },
      { id: 3, nombre: "Monet", precio: 3000 },
    ]
  );


  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
