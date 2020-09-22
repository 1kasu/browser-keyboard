import React from 'react';
import './App.css';

function Nappi(props) {
  return <button onClick={()=> alert("Auts!")}>
    Nappi {props.name}
  </button>;
}

function App() {
  return (
    <div className="App">
      <h1>Browser Keyboard</h1>  
      <Nappi name="A"/>
      <Nappi name="B"/>
    </div>
  );
}

export default App;
