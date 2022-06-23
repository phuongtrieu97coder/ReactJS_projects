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





class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password:"swordfish",
            authorization:false
        }
        this.Unlock_User_Information = this.Unlock_User_Information.bind(this)
    }

    componentDidMount(){
        $(`[id="authorization_block"]`).css({
            "border":"4px double yellowgreen",
            "padding":"20px"
        });

        $(`[id="access_form"]`).css({
            "font-size":"30px",
        });

    }

    Unlock_User_Information(e){
        e.preventDefault();
        if($("[id='password_input']").val() === this.state.password){
            this.setState({authorization:true});
        }
    }
    
    render(){
        
        let Access_form = (
        <form id="access_form" title="access_form" name="access_form"
        action="#" target="_self" method="post" encType="multipart/form-data"
        dataaccessform="access_form_data" onSubmit={this.Unlock_User_Information}>

                <label htmlFor="password_input"><b>Password:</b></label>
                <input id="password_input" title="password_input" name="password1"
                type="password" placeholder="Enter your password" style={{width:"100%"}}/>

                   <br/><br/>


                <button id="login_butt" title="login_butt" type="submit"
                dataloginbutton="login_button_data" className="w3-btn w3-ripple w3-green 
                w3-block w3-text-white w3-hover-blue w3-hover-text-white"
                ><i className="fa fa-sign-in"></i> Log-In</button>
        </form>
        
        )


        let contactinfo = (
            <div id="info_block" className="w3-center">
                 <dl>
                    <dt>Email:</dt>
                    <dd>DFGTHHJK@outlook.com</dd>

                    <dt>Phone Number:</dt>
                    <dd>(619)-632-7586</dd>
                 </dl>
            </div>
        )


        let title1;
        if(this.state.authorization === true){
            title1 = <h1 id="contactinfo_title" className="w3-center">Contact Information</h1>
        }else{
            title1 = <h1 id="Required_password_title" className="w3-center">
                Please Enter Password To Unlock Contact Information
            </h1>

        }

        return (
            <ErrorBoundaries>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <React.StrictMode>
                           <React.Fragment>
                                    <div id="authorization_block" 
                                    className="w3-content">
                                               
                                               {title1}

                                               <br/><br/>

                                               {this.state.authorization === true?contactinfo:Access_form}
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
root_1.render(<Contact/>);


