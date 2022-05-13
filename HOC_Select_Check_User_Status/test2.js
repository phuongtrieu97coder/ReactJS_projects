import Avatar2 from "./image/Avatar/avatar2.png";
function User2(props){
    return (
        <>
        <img src={Avatar2} alt="Avatar2" width="300px" height="300px"/>
        {props.children}<br/>
        <b>User-CSFTGHM</b>
        </>
    )
}
export default User2;