import Avatar1 from "./image/Avatar/avatar1.png";
function User1(props){
    return (
        <>
        <img src={Avatar1} alt="Avatar1" width="300px" height="300px"/>
        {props.children}<br/>
        {/*props children will render contents of check user online status */}
        <b>User-TGHPM</b>
        </>
    )
}
export default User1;