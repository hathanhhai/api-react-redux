import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {createProductRequest,getProductRequest} from '../../actions/index'
import {callApi} from '../../utils/call_api'
class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      price:'',
      status:false,

    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value
    });
  }



  componentWillMount(){
    var {match} = this.props;
    if(match){
      this.props.onFetchOne(match.params.id);
    }
  }

  componentWillReceiveProps(nexProps){
    var {isEditting} = this.props;
    if(nexProps && isEditting !==null){
      this.setState(nexProps.isEditting)
    }
  }



  onSubmit = (e)=>{
    e.preventDefault();
    var {match} = this.props;
    var objectProduct = {
      name:this.state.name,
      price:this.state.price,
      status:this.state.status
    }
    
    if(match){
      callApi(`products/${match.params.id}`,'PUT',({
        name:this.state.name,
        price:this.state.price,
        status:this.state.status
      })).then(res=>{
        this.props.history.goBack(); 
      });
    }else{
      this.props.onAddProduct(objectProduct);
    }
    this.props.history.goBack(); 
    console.log(this.state);

  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form  onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Product Name:</label>
            <input type="text" className="form-control" 
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Price :</label>
            <input type="number" className="form-control"
            name="price"
            value={this.state.price}
            onChange={this.onChange}
             />
          </div>

        

          <div className="form-group">
            <label>Status :</label>
          </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" 
                name="status"
            value="true"
            onChange={this.onChange}
            checked={this.state.status}
                 />
                In Stocks
              </label>
            </div>
          <Link to="/product-list" className="btn btn-danger">BACK</Link>&nbsp;
          <button type="submit" className="btn btn-primary">Save</button>
        </form>

      </div>
    );
  }



}
const mapStateToProps = (state, ownProps) => {
  return {
    isEditting:state.isEditting
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddProduct:(product)=>{
      dispatch(createProductRequest(product))
    },
    onFetchOne : (id)=>{
      dispatch(getProductRequest(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
