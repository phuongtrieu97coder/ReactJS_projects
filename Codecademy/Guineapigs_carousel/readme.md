![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript)  ![image](https://img.shields.io/badge/ReactJS-black?style=for-the-badge&logo=react)

<br>

[![image](https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png)](https://www.codecademy.com/courses/react-101/lessons/container-presentational-components/exercises/container-presentational-components-intro)
<br><br>


# Guineapigs Carousel

> This is a small project from 'Separate Container Components From Presentational Components' sections of 'CONTAINER COMPONENTS FROM PRESENTATIONAL COMPONENTS' concept.

> This project is using a component called "<GuineaPigs />". <GuineaPigs />‘s job is to render a photo carousel of guinea pigs. This component uses this.state object, carousel method, componentDidMount method, and componentWillUnmount method to generate features of carousel.

> This project doesn't have any button to change the slideshow direction

![image](https://user-images.githubusercontent.com/82598726/175994031-e5749841-c330-405f-9efb-8ce5141f4dcc.png)

![image](https://user-images.githubusercontent.com/82598726/175994115-21394187-4026-4397-9fce-9d09e449b9f3.png)


![image](https://user-images.githubusercontent.com/82598726/175994060-43b422c7-198e-4cfb-a8bd-b7a714a86108.png)


![image](https://user-images.githubusercontent.com/82598726/175994465-645299f1-34ff-46ad-b355-060c70762a93.png)


```javascript
import React,{useState,useEffect,useCallback,
useMemo,memo,useReducer,useContext,
createContext,useRef,createRef,forwardRef,
Suspense,startTransition,useTransition,
lazy,Component,PureComponent}
 from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter,Routes,Route,Outlet,Link}
from "react-router-dom";
import "./test1.scss";
import ReactDOM from "react-dom";
import $ from "jquery";
import PropTypes from "prop-types";

class ErrorBoundaries extends React.Component{
      constructor(props){
            super(props);
            this.state = {error:false};
      }
      static getDerivedStateFromError(error){
            this.setState({error:true});
            return console.log(`Error: ${error}`);
      }
      componentDidCatch(error,errorinfo){
            return console.log(`
            Error: ${error}.
            Error Information: ${errorinfo}.
            `);
      }
      render(){
            if(this.state.error === true){
                  return <h1>There were errors occurred while rendering component contents!!!</h1>
            }else{
                  return this.props.children;
            }
      }
}


const GUINEAPATHS = [
      'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
      'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
      'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigs extends React.Component{
      constructor(props){
            super(props);
            this.state = {currenGP:0};
            this.interval = null;
            this.nextGP = this.nextGP.bind(this);
      }
      nextGP(){
            let current = this.state.currenGP,
            next = ++current%GUINEAPATHS.length;
            this.setState({currenGP:next});
      }
      componentDidMount(){
          this.interval = setInterval(this.nextGP,3000);
      }
      componentWillUnmount(){
            clearInterval(this.interval);
      }


  render(){
      const src = GUINEAPATHS[this.state.currenGP];
      return (
            <ErrorBoundaries>
                  <Suspense fallback={<h1>Loading...</h1>}>
                       <React.StrictMode>
                            <React.Fragment>
                                  <div>
                                    <h1>Cute Guinea Pigs</h1><br/>
                                      <img src={src} width="300px" height="300px" alt="Guineapigs"/>
                                  </div>
                            </React.Fragment>
                       </React.StrictMode>
                  </Suspense>
            </ErrorBoundaries>
        )
  }
}



var container1 = document.getElementById("block1"),
root_1 = createRoot(container1);
root_1.render(<GuineaPigs/>);
```


