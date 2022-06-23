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
import {Button} from "./test1";




class Random extends React.Component {
    constructor(props){
        super(props);
        this.state = {color:[0,255,0]}
    }
    componentDidMount() {
      this.applyColor();
      if(document.body.style.backgroundColor == "white"){
        $("h1").css({
            color:"black"
          })
      }else{
        $("h1").css({
            color:"white"
          })
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      this.applyColor();
    }
  
    formatColor(ary) {
      return 'rgb(' + ary.join(', ') + ')';
    }
  
    isLight() {
      const rgb = this.state.color;
      return rgb.reduce((a,b) => a+b) < 127 * 3;
    }
  
    applyColor() {
      const color = this.formatColor(this.state.color);
      document.body.style.background = color;
    }
  
    chooseColor() {
      const random = [];
      for (let i = 0; i < 3; i++) {
        random.push(Math.floor(Math.random()*256));
      }
      return random;
    }

    handleClick =()=>{
        this.setState({
            color:this.chooseColor()
          })
    }
  
    render() {
      return (
        <div className="w3-center">
          <h1 className={this.isLight() ? 'white' : 'black'}>
               Your color is {this.formatColor(this.state.color)}
          </h1>
          <Button light={this.isLight()} onClick={this.handleClick}/>
        </div>
      );
    }
  }
var container1 = document.getElementById("block1"),
root_1 = createRoot(container1);
root_1.render(<Random />);


