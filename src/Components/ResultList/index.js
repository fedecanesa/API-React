import React from "react";
import ResultItem from "./ResultItem"

export default class ResultList extends React.Component 
{

    render()
    {
        const { arrayProducto } = this.props;
        
        return(
            arrayProducto.length > 0 && (
                <>
                    <h2>Resultados: </h2>
                    <ul>
                        {
                            arrayProducto.map((producto)=>
                            {
                                return <li key={producto.id}><ResultItem producto={producto}/></li>
                            })
                        }
                    </ul>
                </>
            )
        )         
    }
}