import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProductItem extends Component {


    onDelete = (e)=>{
       this.props.onDelete(e);
    }

    render() {
        var {product,index} =this.props;
        var statusName = product.status ? 'In Stocks' : 'Null';
        var classStatus = product.status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    
                    <span className={`label label-${classStatus}`}>
                    {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} className="btn btn-primary">EDIT</Link> &nbsp;
                    <button type="button" className="btn btn-danger" onClick={(e)=>this.onDelete(product.id)} >DELETE</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
