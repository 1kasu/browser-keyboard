import React from 'react';
import './App.css';

function Nappi(props) {
  return <button onClick={props.onClick}>
    {props.name}
  </button>;
}

function NumeroSyote(props) {
  return <input type="number" id={props.id} name={props.id} min={props.min} max={props.max} value={props.value}/>
}



function Ruudukko(props){
  var i = 1;
  var ruudut = [];
  for (var l = 0; l < props.leveys; l++){
    ruudut.push(<div class="ruutu">{i++}</div>);
  }
  return <div class="ruudukko">{ruudut}</div>;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leveys: 30,

    };
  }

  paivitaRuudukko(){
    //alert("Päivitetään ruudukon koko");
    this.setState({
      leveys: this.state.leveys - 1, 
    });
  }

  render(){
    var korkeus = 2;
    return (
      <div className="App">
        <h1>Browser Keyboard</h1>  
        <label for="leveysSyote">Leveys</label>
        <NumeroSyote id="leveysSyote" min="1" max="100" value={this.state.leveys}/>
        <label for="korkeusSyote">Korkeus</label>
        <NumeroSyote id="korkeusSyote" min="1" max="100"value={korkeus}/>
        <Nappi onClick={() => this.paivitaRuudukko()} name="Päivitä"/>
        <Ruudukko leveys={this.state.leveys} korkeus={korkeus}/>
      </div>
    );
  }
}

export default App;
