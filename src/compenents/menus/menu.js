import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'


const menus = [
    {
        name:'Home',
        to:'/',
        exact:true
    },
    {
        name:'Menagemention',
        to:'/product-list',
        exact:false
    }
];

const MenuLink = ({label,to,activeOnlyWhenExact}) =>{
    return (
        <Route
        path={to}  exact={activeOnlyWhenExact} children={({match})=>{
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>{label}</Link>
                </li>
            );
        }}
        />
    );
}

class Menu extends Component {
  render() {
    return (
        <div className="navbar navbar-default">
        <a className="navbar-brand" >CALL API</a>
        <ul className="nav navbar-nav">
         {this.showMenu(menus)}
        </ul>
      </div>
    );
  }

  showMenu = (menus) =>{
      var result;
        if(menus.length > 0){
             result = menus.map((item,index)=>{
                return (
                    <MenuLink key={index} label={item.name} activeOnlyWhenExact={item.exact} to={item.to}  />
                );
             });
        }
      return result;
  }
}

export default Menu;
