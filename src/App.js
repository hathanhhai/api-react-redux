import React, { Component } from 'react';
import './App.css';
import Menu from './compenents/menus/menu'
import ProductList from './compenents/products/product_list';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>

    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return (
          <Route
            key={index} path={item.path} exact={item.exact} component={item.main} />
        )
      });
    }

    return <Switch>{result}</Switch>;
  }

}

export default App;
