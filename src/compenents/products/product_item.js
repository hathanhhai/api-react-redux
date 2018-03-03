import React, { Component } from 'react';

class ProductItem extends Component {
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
                    <button type="button" className="btn btn-primary ">EDIT</button> &nbsp;
                    <button type="button" className="btn btn-danger ">DELETE</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
