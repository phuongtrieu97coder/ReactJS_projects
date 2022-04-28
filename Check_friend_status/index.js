import React,{useState,useEffect,useCallback,useMemo,memo,useContext,createContext,useReducer,
    useRef,useImperativeHandle,forwardRef} from "react";
    import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
    import ReactDOM from "react-dom";
    import "./test1.scss";
    
    const friendList = {
        friend1: {
            id: 1, name: 'Phoebe', onlineStatus:true
         },
         friend2:{
            id: 2, name: 'Rachel', onlineStatus:false
         },
         friend3:{
            id: 3, name: 'Ross', onlineStatus:false
         },
         friend4:{
            id: 4, name: 'Mike', onlineStatus:true
         },
    }
    
    var Context1 = createContext(friendList);
    
    function useFriendStatus(para1){
         if (para1 === "" || para1 === null){
             return null;
         }else{
             return para1;
         }
    }
    //I use useFriendStatus(para1) function as a hook and this hook is used to call 
    // friendList  as argument inside a component
    
    function Blockcode1(){
        var [friendstatus,setFriendstatus] = useState(friendList);
        return (
            <Context1.Provider value={friendstatus}>
                  <Blockcode2 props1={friendstatus}/>
            </Context1.Provider>
        )
    }
    
    function Blockcode2(){
        return <FriendListItem/>
    }
    
    function FriendListItem() {
        var checkStatus = useContext(Context1);
         const friend1_status = useFriendStatus(checkStatus.friend1.onlineStatus);
         //return true
         const friend2_status = useFriendStatus(checkStatus.friend2.onlineStatus);
         //return false
         const friend3_status = useFriendStatus(checkStatus.friend3.onlineStatus);
         //return false
         const friend4_status = useFriendStatus(checkStatus.friend4.onlineStatus);
         //return true
      
        return (
            <div>
                <h3>Check Friend Status: </h3>
               
               
                <span style={{backgroundColor:"green",padding:"0px 10px",borderRadius:"30px",
            marginRight:"5px"}}></span> Online  
                <span style={{backgroundColor:"red",padding:"0px 10px",borderRadius:"30px",
            marginRight:"5px"}}></span> Offline
               
    
                <ul>
                    <li style={{ color: friend1_status ? 'green' : 'red' }}>
                    {checkStatus.friend1.name}
                    </li>{/*if friend1_status return true => color of this text will be green.
                    Otherwise, color will be red */}
                    <li style={{ color: friend2_status ? 'green' : 'red' }}>
                    {checkStatus.friend2.name}
                    </li>
                    <li style={{ color: friend3_status ? 'green' : 'red' }}>
                    {checkStatus.friend3.name}
                    </li>
                    <li style={{ color: friend4_status ? 'green' : 'red' }}>
                    {checkStatus.friend4.name}
                    </li> 
                 </ul>
            </div>
        
        );
      }
    
    
    
    ReactDOM.render(<Blockcode1/>,document.getElementById("block1"));
    