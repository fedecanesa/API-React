import './App.css';
import React from "react";

import SearchBox from './Components/SearchBox';
import ResultList from './Components/ResultList';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      busqueda: "",
      arrayProducto: {}
    }
  }

  componentDidMount()
  {
    let busquedaPorDefecto = "Atari 2600";
    let url = `${"https://api.mercadolibre.com/sites/MLA/search?q="}${encodeURI(busquedaPorDefecto)}`;
    this.setState({busqueda: busquedaPorDefecto});

    fetch(url)
    .then((response)=>response.json())
    .then((json)=>{this.setState({arrayProducto: json})})
  }

  getData = (value)=>{
    this.setState({busqueda: value});
    fetch(`${"https://api.mercadolibre.com/sites/MLA/search?q="}${encodeURI(value)}`)
    .then((response)=>response.json())
    .then((json)=>{this.setState({arrayProducto: json})})
    
  }
  

  render()
  {
    return(
      <div className="App">
        <h1>Guayerd - MELI</h1>
  
        <SearchBox getData={this.getData}></SearchBox>
        
        <ResultList 
          busqueda={this.state.busqueda} 
          arrayProducto={this.state.arrayProducto.results || []} >
        </ResultList>
      </div>
    )
  }
}

export default App;
