import React,{useState,useEffect,useCallback,useMemo,memo,useContext,createContext,useReducer,
    useRef,useImperativeHandle,forwardRef} from "react";
    import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";
    import ReactDOM from "react-dom";
    import "./test1.scss";
    
    const friendList = {
        friend1: {
            id: 1, name: 'Phoebe', onlineStatus:"online"
         },
         friend2:{
            id: 2, name: 'Rachel', onlineStatus:"offline"
         },
         friend3:{
            id: 3, name: 'Ross', onlineStatus:"online"
         },
         friend4:{
            id: 4, name: 'Mike', onlineStatus:"offline"
         },
    }
    
    function useFriendStatus(friendStatus){
        var [fstts,setFriendstatus] = useState(friendStatus);
         //now this useState hook can be used anywhere when you set up a custom hook 
        
         if (friendStatus === "" || friendStatus === null){
             return null;
         }else{
             return fstts;
         }
    }
    
    
    function FriendListItem(props) {
         const friend1_status = useFriendStatus(props.info.friend1.onlineStatus);
//this custom hook  will setup value from props to useState hook above and then return value as  “online” or “offline” 
         const friend2_status = useFriendStatus(props.info.friend2.onlineStatus);
         const friend3_status = useFriendStatus(props.info.friend3.onlineStatus);
         const friend4_status = useFriendStatus(props.info.friend4.onlineStatus);
       
    
        return (
            <div>
                <h3>Check Friend Status: </h3>
               
               
                <span style={{backgroundColor:"green",padding:"0px 10px",borderRadius:"30px",
            marginRight:"5px"}}></span> Online  
                <span style={{backgroundColor:"red",padding:"0px 10px",borderRadius:"30px",
            marginRight:"5px"}}></span> Offline
               
    
                <ul>
                    <li style={{ color: friend1_status === "online" ? 'green' : 'red' }}>
                    {props.info.friend1.name}
                    </li>
                    <li style={{ color: friend2_status === "online" ? 'green' : 'red' }}>
                    {props.info.friend2.name}
                    </li>
                    <li style={{ color: friend3_status === "online" ? 'green' : 'red' }}>
                    {props.info.friend3.name}
                    </li>
                    <li style={{ color: friend4_status  === "online" ? 'green' : 'red' }}>
                    {props.info.friend4.name}
                    </li> 
                 </ul>
            </div>
        
        );
      }
    
    
    
    ReactDOM.render(<FriendListItem info={friendList}/>,document.getElementById("block1"));
    
    