

function App() {

  
let varprueba = "titulo"
  const handleChangePrueba = (event) => { 
varprueba = event.target.value

   
  
  }


  return (
<div className="App">

<h3>Notas</h3>
<label htmlFor="pruebaID">Input de prueba</label>

<input id="pruebaID" name="InPUT" type="text" onChange={handleChangePrueba} value={varprueba}
/>

</div>
);
}

export default App;
