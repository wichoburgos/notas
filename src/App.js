import { useState } from "react";

function App() {

//hooks

const [inputState, setInputState] =useState({
  titulo: "",
  fecha:"",
  nota:"",
});


const handleInputChange = (event) => {
  setInputState({
    ...inputState,
    [event.target.name]: event.target.value,
  });
};
const handleResetClick = ( ) => {
  setInputState({titulo:"", fecha:"",nota:""});
}


  return (
<div className="App">

<h3>Notas</h3>
<label htmlFor="titulo">Titulo: </label>

<input id="titulo" name="titulo" type="text" onChange={handleInputChange} value={inputState.titulo}
/>

<br />
<label htmlFor="fecha">Fecha: </label>

<input id="fecha" name="fecha" type="text" onChange={handleInputChange} value={inputState.fecha}
/>

<br />


<label htmlFor="nota">Nota: </label>

<input id="nota" name="nota" type="text" onChange={handleInputChange} value={inputState.nota}
/>
<div ClassName="mt-2">
<button type="button"className="btn btn-primary" onClick={handleResetClick} >REINICIO</button>
</div>



</div>
);
}

export default App;
