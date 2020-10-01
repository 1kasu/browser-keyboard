import React from 'react';
import './App.css';

function Nappi(props) {
  return <button onClick={()=> alert("Auts!")}>
    {props.name}
  </button>;
}

function NumeroSyote(props) {
  return <input type="number" id={props.id} name={props.id} min={props.min} max={props.max} value={props.value}/>
}

function Ruudukko(props) {
  var i = 1;
  var ruudut = [];
  for (var l = 0; l < props.leveys; l++){
    ruudut.push(<div class="ruutu">{i++}</div>);
  }
  return <div class="ruudukko">{ruudut}</div>;
}

function App() {
  var leveys = 40;
  var korkeus = 2;
  return (
    <div className="App">
      <h1>Browser Keyboard</h1>  
      <label for="leveysSyote">Leveys</label>
      <NumeroSyote id="leveysSyote" min="1" max="10" value={leveys}/>
      <label for="korkeusSyote">Korkeus</label>
      <NumeroSyote id="korkeusSyote" min="1" max="10"value={korkeus}/>
      <Nappi name="Päivitä"/>
      <Ruudukko leveys={leveys} korkeus={korkeus}/>
    </div>
  );
}

export default App;
