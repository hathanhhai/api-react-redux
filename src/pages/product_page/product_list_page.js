import React, { Component } from 'react';
import ProductList from '../../compenents/products/product_list';
import ProductItem from '../../compenents/products/product_item';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import * as actions from '../../actions/index';
class ProductListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      products:[]
    }
  }

  componentWillMount(){
    this.props.onFetchProduct();
  }

  onDelete = (value) =>{
    var {products} = this.props;
     this.props.onDeleteRequest(value);
  }



  render() {
    var {products} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-primary mt-b">ADD</Link>
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
              <ProductItem onDelete={this.onDelete}  key={index} product={item} index={index} />
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchProduct: ()=>{
     dispatch(actions.fetchProductRequest())
    },
    onDeleteRequest:(id) =>{
      dispatch(actions.deleteProductRequest(id));
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
