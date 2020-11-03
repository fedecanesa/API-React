import React from "react";

class SearchBox extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            busqueda: ""
        };
    }
    
    changeHandler = (event) =>
    {
        event.preventDefault();
        this.setState({busqueda: event.target.value});
    }

    sendData = (event)=>
    {
        event.preventDefault();
        this.state.busqueda !== "" && (this.props.getData(this.state.busqueda))

    }


    render()
    {
        return(
            <nav className="navbar navbar-light bg-light">
               
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="¿Qué desea buscar?" aria-label="Search" onChange={this.changeHandler} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.sendData}>Buscar</button>
                </form>
          </nav>  
        )
    }
}

export default SearchBox;