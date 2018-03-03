import React, { Component } from 'react';
import ProductList from '../../compenents/products/product_list';
import ProductItem from '../../compenents/products/product_item';
import {connect} from 'react-redux'

class ProductListPage extends Component {
  render() {
    var {products} = this.props
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-primary mt-b">ADD</button>

        <ProductList>
          {this.showProductItem(products)}
        </ProductList>

      </div>
    );
  }

  showProductItem(products){
      var result = null;
        if(products.length>0){
          result = products.map((item,index)=>{
            return (
              <ProductItem  key={index} product={item} index={index} />
            );
          }); 
        }
      return result;
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    products:state.products
  }
}

export default connect(mapStateToProps)(ProductListPage);
