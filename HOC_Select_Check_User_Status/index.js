import React,{useState,useEffect,useMemo,useCallback,useReducer,useRef,forwardRef,useImperativeHandle,
    useContext,createContext,createRef,lazy,Suspense,startTransition,memo} from "react";
    import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
    import {createRoot} from "react-dom/client";
    import "./test1.scss";
    //I want to import contents from "test1.js", "test2.js"
    var User1 = React.lazy(()=>import("./test1"));
    var User2 = React.lazy(()=>import("./test2"));
    
    
    //I want to make a block of code to handle error rendering syntax
    //this block is used to call inside "Blockcode0(Content1,HandleError)" HOC function
    // as 'HandleError' argument
    class ErrorBoundaries extends React.Component{
        constructor(props){
            super(props);
            this.state = {error:false};
        }
        shouldComponentUpdate(){
            return true;
        }
        static getDerivedStateFromError(error){
            this.setState({error:true});
            return console.log("ERROR: "+error);
        }
        componentDidCatch(error,errorinfo){
            return console.log(`
            Error: ${error}.
            Error information: ${errorinfo}.
            `);
        }
        render(){
            if(this.state.error === true){
                return <h1>There was an error loading Users content!!!</h1>
            }else{
                return this.props.children;
            }
        }
    }
    
    //I want to make a list object container user information and online status
    var Userlist = {
        User1:{
            id:1,
            name:"TGHPM",
            passcode:"1354843",
            online:true
        },
        User2:{
            id:2,
            name:"CSFTGHM",
            passcode:"7874631349",
            online:false
        }
    }
    
    
    //I want to use this block as a custom hook to check users online status
    //this block is used inside "CheckUserOnlineStatus(User)" component
    var useCheckUserStatus = (status) => {
         var [stt,setStt] = useState(status);
         if(status === "" || status === null){
             return null;
         }else{
             return stt;
         }
    }
    
    
    //I want this block to be a block contians introduction of this form and select input 
    //this block is used inside 'LoadUserContent(props)' component
    function SelectUser(props){
        return (
            <React.Fragment>
                <h1 className="text-success w3-center"
                 style={{letterSpacing:"3px",textShadow:"3px 3px 3px aqua"}}>
                    <i className="fa fa-check-circle"></i> Check Users Status
                </h1><br/>
                <label htmlFor="selectuser"><b>Select User:</b></label>
                <select id="selectuser" name="selectuser" title="selectuser" value={props.userselectvalue}
                onChange={props.userselecthandlevalue} style={{fontSize:"35px",width:"100%"}}>
                        <option value="TGHPM">User-TGHPM</option>
                        <option value="CSFTGHM">User-CSFTGHM</option>
                </select>
                    {/*
            value={props.userselectvalue} : value will be value of props named 'userselectvalue' that 
            is going to be attached to this component when 'LoadUserContent(props)' component render
            this component
    
    
            onChange={props.userselecthandlevalue}  : this will take a method that link to 
            props named userselecthandlevalue that is going to be attached
             to this component when 'LoadUserContent(props)' component render
            this component
        */}
            </React.Fragment>
        
        )
    }
    
    //this block is used to check user online status and display to user to present whether a specific
    //user is online or offline through the text color green or red
    //this block is used inside 'Blockcode0' HOC through syntax  
    // <Content1  onlineStatus1={<CheckUserOnlineStatus usr="TGHPM"/>} 
    //  onlineStatus2={<CheckUserOnlineStatus usr="CSFTGHM"/>}/>  that is used to render <Content1/>
    //with two specified props 'onlineStatus1' and 'onlineStatus2'
    
    function CheckUserOnlineStatus(User){
        var user1Status = useCheckUserStatus(Userlist.User1.online),
        user2Status = useCheckUserStatus(Userlist.User2.online);
    //I make variables work with custom hook 'useCheckUserStatus' that take information from 'Userlist'
    //object above
    
    
    
        var OutputContent;
        if(User.usr === "TGHPM" && user1Status === true){//if props 'usr' = 'TGHPM' and variable 
            //'user1Status' return true value => I want variable 'OutputContent' render an <li>
            //element to present Online content with text color green
    
            OutputContent = <li  style={{color:"green"}}> Online</li>
        }else if(User.usr === "TGHPM" && user1Status === false){
            OutputContent = <li style={{color:"red"}}> Offline</li>
        }else if (User.usr === "CSFTGHM" && user2Status === true){
            OutputContent = <li style={{color:"green"}}> Online</li>
        }else if (User.usr === "CSFTGHM" && user2Status === false){
            OutputContent = <li style={{color:"red"}}> Offline</li>
        }else {
           console.log("");
        }
    
        return (
            <React.Fragment>
                   <ul id="statuslist" style={{listStyleType:"square",display:"none"}}>{OutputContent}</ul>
                   {/*
            I want this <ul> element render 'OutputContent' variable above and I want this element disappear
            first because I want user only see this content after they click "Check Status" button, not when
            they first access this page
            id attribute will help me to make this element appear late with javascript syntax       
                   */}
            </React.Fragment>
        )
    }
    
    
    //This block is used to call as an argument 'Content1' of 'Blockcode0(Content1,HandleError)'
    //this block render content from 'SelectUser(props)', and 'LoadUserContent' variable inside this block
    // is used to render contents from "test1.js", and "test2.js". In addition, this variable
    //also render value from  props named 'onlineStatus1', and 'onlineStatus2'
    
    
    function LoadUserContent(props){
        var [userdata,setUserdata] = useState("TGHPM");
    
        var UserSelectHandleValue = (event) => {
            startTransition(()=>{
                setUserdata(event.target.value);
            });
        };//I want to handle select option data and make sure each transition between options is not hurry
        //it can take time if the program have too many things to render
    
        var PreventSubmit = (event)=>{
            event.preventDefault();
        }//I want to make sure this form is not submit through post request
    
    
        var LoadUserContent;
    
       
    
    //The purpose of making the following conditional is I want to change content according to
    //the changing of User select option
    //if user select user named 'TGHPM', then the content from this user will appear following with
    //the online status hidden content
        if(userdata === "TGHPM"){
            LoadUserContent = <User1>{props.onlineStatus1}</User1>;
            //{props.onlineStatus1} will be children contents of this 'User1' component
        }else if (userdata === "CSFTGHM"){
            LoadUserContent = <User2>{props.onlineStatus2}</User2>;
        }else{
            LoadUserContent = "";
        }
    
    
        //the following method is used to display the check online status content based on
        // the changing of select option value 'userdata' of useState hook.
        //this method is used to be called inside 'onClick' event of a button
        //placed inside 'Checkstatusbutton' component
        var Checkstatusfunc = () =>{
    
            if(userdata === "TGHPM"){
                  document.getElementById("statuslist").style.display = "block";
            }else if(userdata === "CSFTGHM"){
                document.getElementById("statuslist").style.display = "block";
            }else{
                document.getElementById("statuslist").style.display = "none";
            }
        }
    
    
    
    
        return (
            <form id="Checkuserstatusform" title="Checkuserstatusform" name="Checkuserstatusform"
            action="/index.html" method="post" target="_self" encType="multipart/form-data"
            style={{width:"700px",border:"5px double yellowgreen",padding:"20px",fontSize:"30px"}}
            onSubmit = {PreventSubmit}>
                      
                    <Suspense fallback={<h1>Loading...</h1>}>{/*users will see 'Loading...' content
                    in a few moment when they first access this page, then content from components
                    'SelectUser', 'LoadUserContent', and 'Checkstatusbutton' will appear  */}
                        <SelectUser userselectvalue={userdata} userselecthandlevalue={UserSelectHandleValue}/>
                        {/*props named 'userselectvalue' will take value from 'userdata'
                        , 'userselecthandlevalue' will take value from method 'UserSelectHandleValue'
                        */}
                        {LoadUserContent}
                         <Checkstatusbutton Checkstatusfuncprop={Checkstatusfunc}/>
                         {/*render  Checkstatusbutton component below and attached 'Checkstatusfunc' method
                         to 'Checkstatusfuncprop' props*/}
                    </Suspense>
    
    
            </form>
        )
    }
    
    
    function Checkstatusbutton(props){
        return <button id="checkstatusbutton" title="checkstatusbutton"
        name="checkstatusbutton" type="button" data-checkstatusbutton-data="checkstatusbutton_data"
        className="btn btn-info text-white w3-hover-green w3-hover-text-white"
        style={{fontSize:"40px"}} onClick={props.Checkstatusfuncprop}>
            {/*onClick event now can work with method attached to props named 'Checkstatusfuncprop' */}
            <i className="fa fa-check"></i> Check Status
        </button>
    }
    
    //I want this HOC func render contents from 'Maincontent' component inside it and external contents
    //as 'Content1' and 'HandleError'
    //I want 'Content1' render 'LoadUserContent' component, and 'HandleError' render 'ErrorBoundaries'
    //component
    function Blockcode0(Content1,HandleError){
        class Maincontent extends React.Component{
            shouldComponentUpdate(){
                return true;
            }
            render(){
                return (
    
                <HandleError>
    
    
                    <React.Fragment>
                             <Content1  onlineStatus1={<CheckUserOnlineStatus usr="TGHPM"/>} 
                             onlineStatus2={<CheckUserOnlineStatus usr="CSFTGHM"/>}/> 
                             {/*Content1 now will render contents from  LoadUserContent
                             and its props named 'onlineStatus1' and 'onlineStatus2' will render contents 
                             from 'CheckUserOnlineStatus' component with different props values
                             */}        
                    </React.Fragment>
    
    
                </HandleError>
                );
            }
        }
       
        var forwardRef1 = (props,ref) => {//I want to make sure that 'Maincontent' work with ref
            //through React.forwardRef method
    
            return <Maincontent ref={ref}/>;
        }
        forwardRef1.displayName="WRTFGHNMVXPKLHFDS";
    
        var Outputcontent = React.forwardRef(forwardRef1);
      
        return Outputcontent;
    
    }
    
    //Now I make a variable to call 'Blockcode0' HOC function with different component attached to it 
    //as arguments
    
    var Blockcode1 = Blockcode0(LoadUserContent,ErrorBoundaries);
    
    var container1 = document.getElementById("block1"),
    root_1 = createRoot(container1);
    root_1.render(<Blockcode1/>);
    //render 'Blockcode1'