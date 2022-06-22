import React,{useState,useEffect,useCallback,useMemo,
useReducer,useContext,createContext,useRed,createRef,
forwardRef,lazy,Suspense,Component,PureComponent,memo,
startTransition}
from "react";
import {BrowserRouter,Routes,Route,Outlet,Link}
from "react-router-dom";
import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import "./test1.scss";
import PropTypes from "prop-types";
import $ from "jquery";



class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let login = (
      <form action="#" onSubmit={this.authorize}>
         <input type="password" placeholder="password"/>
         <input type="submit"/>
      </form>
    );

    const contactinfo = (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized === false ? 'Enter the Password' : 'Contact'}</h1>

        {this.state.authorized === false ?login :contactinfo}
      
      </div>
    );
  }
}

var container1 = document.getElementById("block1"),
root_1 = createRoot(container1);
root_1.render(<Contact/>);
