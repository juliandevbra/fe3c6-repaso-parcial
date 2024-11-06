import { useState } from "react";
import "./App.css";
import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";
import Form from "./Components/Form";

function App() {
  const [isSelected, setIsSelected] = useState({
    status: false,
    artista: null,
  });
  return (
    <>
      {isSelected.status ? <Form artista={isSelected.artista} /> : null}
      {espectaculos.map((espectaculo) => (
        <Espectaculo
          key={espectaculo.id}
          setIsSelected={setIsSelected}
          espectaculo={espectaculo}
        />
      ))}
    </>
  );
}

export default App;

//Componentes
//Props
//useState
//Eventos
//Map
//Formularios
