import React from 'react';
import './App.css';

function Nappi(props) {
  return <button onClick={props.onClick}>
    {props.name}
  </button>;
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
      leveyssyote: 30
    };
  }

  paivitaLeveyssyote(leveyssyote){
    this.state.leveyssyote = leveyssyote.target.value;  
  }

  paivitaRuudukko(){
    if (0 < this.state.leveyssyote){ 
      this.setState({
        leveys: this.state.leveyssyote, 
      });
    } else {
      //alert(this.state.leveyssyote);
    }
  }

  render(){
    var korkeus = 2;  
    return (
      <div className="App">
        <h1>Browser Keyboard</h1>  
        <label for="leveysSyote">Leveys</label>
        <input type="number" id="leveysSyote" min="1" max="100" onChange={evt => this.paivitaLeveyssyote(evt)}/>
        <label for="korkeusSyote">Korkeus</label>
        <Nappi onClick={() => this.paivitaRuudukko()} name="Päivitä"/>
        <Ruudukko leveys={this.state.leveys} korkeus={korkeus}/>
      </div>
    );
  }
}

export default App;
