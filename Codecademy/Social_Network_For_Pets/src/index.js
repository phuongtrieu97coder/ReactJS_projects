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
  import { Profile } from './Profile';
  import { Directory } from './Directory';
  
  
  
  class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          currentUsername: null,
        };
      }
    
      handleChoose =(newUsername)=> {
        this.setState({ currentUsername: newUsername });
      }
    
      handleReturnToDirectoryClick = () => {
        this.setState({ currentUsername: null });
      }
    
      render() {
        let body;
        if (this.state.currentUsername) {
          body = (
            <Profile
              username={this.state.currentUsername}
              onChoose={this.handleChoose}
            />
          );
        } else {
          body = <Directory onChoose={this.handleChoose} />;
        }
    
        return (
          <div className="App">
            <header>
              <h1>PetBook</h1>
    
              <nav>
                {this.state.currentUsername && (
                  <button onClick={this.handleReturnToDirectoryClick}>
                    Return to directory
                  </button>
                )}
              </nav>
            </header>
    
            <main>{body}</main>
          </div>
        );
      }
    }
  
  
  var container1 = document.getElementById("block1"),
  root_1 = createRoot(container1);
  root_1.render(<App/>);
  
  
  
  
  