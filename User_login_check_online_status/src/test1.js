import React,{useMemo,useState,memo,useReducer,useCallback,useRef,useImperativeHandle,
    forwardRef,useContext,createContext, useEffect} from "react";
    import ReactDOM from "react-dom";
    import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
    import "./test1.scss";
    import Lambor1 from "./image/car/lamborghini_aventador2.jpg";
    
    
    
    //This object contents information of 4 users
    var userinfo = {
       user1:{
        id:Math.floor(Math.random()*1000000000),
        name:"THP",
        status:"online",
        login:"true",
        logout:"false"
       },
       user2:{
        id:Math.floor(Math.random()*1000000000),
        name:"HKSL",
        status:"online",
        login:"true",
        logout:"false"
       },
       user3:{
        id:Math.floor(Math.random()*1000000000),
        name:"BSR",
        status:"online",
        login:"true",
        logout:"false"
       },
       user4:{
        id:Math.floor(Math.random()*1000000000),
        name:"RTG",
        status:"online",
        login:"true",
        logout:"false"
       }
    }
    
    
    var useUserStatus = (status) => {//this custom hook is used to check user online status
        var [status1,setStatus1] = useState(status);
        if(status === "" || status === null){
              return null;
        }else{
            return status1;
        }
    }
    
    
    var Welcome_user_id = (props) =>  {
        //This component will be render later to display introduction about user
        //The content display depends on props "idinfo" and "statusinfo"
    
      
        var user_status = useUserStatus(props.statusinfo);//calling custom hook above to display
        //wheter user is online or offline
       
        var unlockid;
        var unlockname;
    //these two variables are used to unlock user id and name value
    
        if(props.idinfo === "1"){
            unlockid = userinfo.user1.id;
            unlockname = userinfo.user1.name;
        }else if(props.idinfo === "2"){
            unlockid = userinfo.user2.id;
            unlockname = userinfo.user2.name;
        }else if(props.idinfo === "3"){
            unlockid = userinfo.user3.id;
            unlockname = userinfo.user3.name;
        }else if(props.idinfo === "4"){
            unlockid = userinfo.user4.id;
            unlockname = userinfo.user4.name;
        }else{
            unlockid = "";
            unlockname = "";
        }
        //with these conditions, it make me reuse this component as many time as I want to render contents
        //from different users
    
        return (
            <>
            <h1 style={{color:user_status==="online"?"green":"red"}}>
                {/* check user_status variable. If this thing return "online", then this content
                will have color green represent online status. Otherwise, it will have red color 
                represent offline status */}
                <i className="fa fa-user"></i> User: {unlockid}
            </h1><br/>
            <h3>Welcome {unlockname}</h3>
            </>
        )
    }
    
    
    
    class User1Content extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                model:"Lamborghini Aventador",
                carimg:Lambor1,
                color:{
                    type1:{
                        color:"blue"
                    },
                    type2:{
                        color:"green"
                    },
                    type3:{
                        color:"black"
                    }
                }
            }
            this.ChangeColorFunc1 = this.ChangeColorFunc1.bind(this);
        }
    
        ChangeColorFunc1(){
            this.setState({
                color:{
                    type1:{
                        color:"red"
                    }
                }
            })
        }
    
        ChangeColorFunc2 = () => {
            this.setState({
                color:{
                    type2:{
                        color:"purple"
                    }
                }
            })
        }
        render(){
            return (
                <div>
    
                   <Welcome_user_id idinfo="1" statusinfo={userinfo.user1.status}/>
                   {/* I render "Welcome_user_id" component wil two props with specific value */}
                    
                    <img src={this.state.carimg} alt="lamborghini_aventador1" width="400px" height="400px"/>
                    <h1>{this.state.model}</h1><br/>
                    <h2>Color: {this.state.color.type1.color}</h2><br/>
                    <button id="change_color_butt" title="change_color_butt" name="change_color_butt"
                    type="button" data-change_color-butt="change_color_butt_data"
                    className="w3-button w3-ripple w3-orange w3-hover-gray w3-text-white w3-hover-text-white"
                    style={{fontSize:"40px"}} onClick={this.ChangeColorFunc1}>Change Color</button>
    
    
                </div>
            )
        }
    }
    
    
    export {User1Content};
    
    
    
    
    
    
    
    
    
    
    
    class User2Content extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                model:"Lamborghini Aventador",
                carimg:Lambor1
            }
        }
    
       
        render(){
            return (
                <div>
    
                   <Welcome_user_id idinfo="2" statusinfo={userinfo.user2.status}/>
                    
                    <img src={this.state.carimg} alt="lamborghini_aventador1" width="400px" height="400px"/>
                  
                   
    
                </div>
            )
        }
    }
    
    
    export {User2Content};
    
    
    
    
    
    
    
    
    
    
    
    class User3Content extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                model:"Lamborghini Aventador",
                carimg:Lambor1
            }
        }
    
       
        render(){
            return (
                <div>
    
                   <Welcome_user_id idinfo="3" statusinfo={userinfo.user3.status}/>
                    
                    <img src={this.state.carimg} alt="lamborghini_aventador1" width="400px" height="400px"/>
                  
                   
    
                </div>
            )
        }
    }
    
    
    export {User3Content};
    
    
    
    
    
    
    
    
    
    
    
    class User4Content extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                model:"Lamborghini Aventador",
                carimg:Lambor1
            }
        }
    
       
        render(){
            return (
                <div>
    
                   <Welcome_user_id idinfo="4" statusinfo={userinfo.user4.status}/>
                    
                    <img src={this.state.carimg} alt="lamborghini_aventador1" width="400px" height="400px"/>
                  
                   
    
                </div>
            )
        }
    }
    
    
    export {User4Content};