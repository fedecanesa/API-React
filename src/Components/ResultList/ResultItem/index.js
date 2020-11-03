import React from "react";

export default class ResultItem extends React.Component {
    render()
    {
        const { producto } = this.props;
        
        return(
            <div className="card mb-3">
                
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={producto.thumbnail} className="card-img" alt={producto.title} />
                    </div>
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <p className="card-text">{producto.currency_id+" $"+producto.price}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {`Unidades vendidas: ${producto.sold_quantity}  / Unidades disponibles: ${producto.available_quantity}`}
                                </small>
                            </p>
                            <p className="card-text">
                                <span class="badge badge-primary text-dark">
                                    <a href={producto.permalink} target="_blank" rel="noopener noreferrer">
                                            <span className="text-white">Ir a Mercado Libre</span>
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}