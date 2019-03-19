import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#DADADA"}}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#"><img src="../assets/ntust_logo.png"  height="30" width="30"/></a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <NavLink to="/" className="nav-link">首頁 </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/other" className="nav-link">其他 </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
