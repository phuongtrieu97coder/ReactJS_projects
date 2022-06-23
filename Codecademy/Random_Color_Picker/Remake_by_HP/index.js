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



class ErrorBoundaries extends React.Component{
    constructor(props){
        super(props);
        this.state = {error:false};
    }
    static getDerivedStateFromError(error){
        return console.log(`
        Error: ${error}.
        `);
    }
    componentDidCatch(error,errorinfo){
        return console.log(`
        Error: ${error}.
        Error Information: ${errorinfo}.
        `);
    }
    render(){
        if(this.state.error === true){
            return <h1>There were errors occurred 
            while rendering component contents!!!</h1>
        }else{
            return this.props.children;
        }
    }
}




class Random extends React.Component{
    constructor(props){
        super(props);
        this.state = {color:[0,255,0]};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.ApplyBGColor();

        if(document.body.style.background === "rgb(255,255,255)"){
            $("[id='color_title']").css({color:"black"})
        }else{
            $("[id='color_title']").css({color:"white"})
        }
    }
    componentDidUpdate(){ //this method helps you update background color of your website after the color property of this.state has been updated.
        this.ApplyBGColor(); 
    }
    FormatColor =(colorArray) =>{
        return `rgb(${colorArray.join(",")})`;
    }
    ApplyBGColor = () => {
        let bgcolor = this.FormatColor(this.state.color); 
        document.body.style.background = bgcolor;

    }
    randomBGColor = () => {
        var arr1 = [];
        for(let i = 0; i< 3 ; i++){
            arr1.push(Math.floor(Math.random()*256));
        }
        return arr1;
    }
    handleClick(){
        this.setState({
            color:this.randomBGColor()
        })
    }
    render(){
        return (
           <ErrorBoundaries>
            <Suspense fallback={<h1>Loading...</h1>}>
                    <React.StrictMode>
                    <div className="w3-center">
                            <h1 id="color_title">
                                Your Background Color is: {this.FormatColor(this.state.color)}</h1>
                            <Button refresh={this.handleClick}/>
                    </div>
                    </React.StrictMode>
            </Suspense>
           </ErrorBoundaries>
        )
    }
}

var container1 = document.getElementById("block1"),
root_1 = createRoot(container1);
root_1.render(<Random/>);






