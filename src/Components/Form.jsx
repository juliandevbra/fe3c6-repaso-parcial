import { useState } from "react";
import Card from "./Card";

const Form = ({ artista }) => {
  const [comprador, setComprador] = useState({
    nombre: "",
    email: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [err, setErr] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      comprador.nombre.trim().length > 6 &&
      comprador.nombre.includes(" ") &&
      regexEmail.test(comprador.email)
    ) {
      setMostrar(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  console.log(comprador);
  return (
    <div>
      {mostrar ? (
        <Card nombre={comprador.nombre} artista={artista} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre completo: </label>
          <input
            type="text"
            value={comprador.nombre}
            onChange={(event) =>
              setComprador({ ...comprador, nombre: event.target.value })
            }
          />
          <label>Email</label>
          <input
            type="email"
            value={comprador.email}
            onChange={(event) =>
              setComprador({ ...comprador, email: event.target.value })
            }
          />
          <button>Comprar entrada</button>
          {err ? (
            <h4 style={{ color: "red" }}>
              Coloque la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
