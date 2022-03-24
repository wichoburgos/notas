import { useState } from "react";

function App() {

//hooks

const [tituloState, setTituloState] =useState("");
const [fechaState, setfechaState] =useState("");
const [notaState, setnotaState] =useState("");

const handleChangetitulo = (event) => {
  setTituloState(event.target.value);
}

const handleChangefecha = (event) => {
  setfechaState(event.target.value);
}

const handleChangeNota = (event) => {
  setnotaState(event.target.value);
}



  return (
<div className="App">

<h3>Notas</h3>
<label htmlFor="titulo">Titulo: </label>

<input id="titulo" name="titulo" type="text" onChange={handleChangetitulo} value={tituloState}
/>

<br />
<label htmlFor="fecha">Fecha: </label>

<input id="fecha" name="fecha" type="text" onChange={handleChangefecha} value={fechaState}
/>

<br />


<label htmlFor="nota">Nota: </label>

<input id="nota" name="nota" type="text" onChange={handleChangeNota} value={notaState}
/>



</div>
);
}

export default App;
