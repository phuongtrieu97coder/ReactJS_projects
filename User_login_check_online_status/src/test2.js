import React,{useMemo,useState,memo,useReducer,useCallback,useRef,useImperativeHandle,
    forwardRef,useContext,createContext, useEffect} from "react";
    import ReactDOM from "react-dom";
    import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
    import "./test1.scss";
    
    
    function ErrorContent(){
        return <h1>Error Code 404</h1>;
    }
    
    export {ErrorContent};