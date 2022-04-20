import React,{useMemo,memo,useState,useContext,createContext,useEffect} from "react";
import ReactDOM from "react-dom";
import Comp1img from "./image/company1.jpg";
import Comp2img from "./image/company2.jpg";
import "./test1.scss";

function Page1_Form_Content1 (){
    var [datainput,setDatainput] = useState({});
    var [comment,setComment] = useState("");
    var [accountselect,setAccountselect]  = useState("Normal");

    function HandleDataInput(event){
        var name= event.target.name;
        var value = event.target.value;
        setDatainput((val)=>({...val,[name]:value}));
    }

    var Prevent_Submit = (event) => {
        return  event.preventDefault();
    }

    return (
        <article style={{display:"grid",gridTemplateColumns:"600px 800px"}}>
               <form id="form1" title="form1" name="form1" action="index.html" target="_self"
                method="post" data-form1="form1_data" encType="multipart/form-data" 
                style={{width:"100%",fontSize:"30px",border:"4px double yellowgreen",padding:"20px"}}
                onSubmit={Prevent_Submit}>
                        <div>
                             <h1 className="w3-center w3-black w3-padding w3-text-aqua">
                                 <i className="fa fa-user"></i> REGISTER
                             </h1>
                        </div>

                        <label htmlFor="name_input"><b>Name:</b></label>
                        <input id="name_input" title="name_input" name="name1" type="text"
                        data-name-input="name_input_data" style={{width:"100%"}}
                        placeholder="Enter your name..." value={datainput.name1 || ""}
                        onChange={HandleDataInput}/>


                        <label htmlFor="email_input"><b>Email:</b></label>
                        <input id="email_input" title="email_input" name="email1" type="email"
                        data-email-input="email_input_data" style={{width:"100%"}}
                        placeholder="Enter your email..." value={datainput.email1 || ""}
                        onChange={HandleDataInput}/>


                        <label htmlFor="Account_Selection_input"><b>Account Selection:</b></label>
                        <select id="Account_Selection_input" title="Account_Selection_input" name="Account_Selection1" type="text"
                        data-account_selection-input="Account_Selection_input_data" style={{width:"100%"}}
                         value={accountselect || ""}
                        onChange={(event) => setAccountselect(event.target.value)}>
                            <option disabled>---Account Select---</option>
                            <optgroup label="Commont">
                                <option value="Free">Free</option>
                                <option value="Normal">Normal</option>
                                <option value="Premium">Premium</option>
                            </optgroup>
                            <optgroup label="Special">
                                <option value="VIP">VIP</option>
                                <option value="First-Class">First-Class</option>
                            </optgroup>
                        </select>


                        <label htmlFor="comment_input"><b>Comment:</b></label>
                        <textarea id="comment_input" title="comment_input" name="comment1" type="text"
                        data-comment-input="comment_input_data" style={{width:"100%",height:"100px"}}
                        placeholder="Enter your comment..." value={comment || ""}
                        onChange={(event) => setComment(event.target.value)}></textarea>

                        <button id="register_butt" title="register_butt" name="register_butt"
                        type="submit" data-register-butt="register_button_data"
                        className="btn btn-success text-white btn-block w3-hover-blue w3-hover-text-white"
                         style={{fontSize:"35px"}}>
                            <i className="fa fa-sign-in"></i> REGISTER
                        </button>
               </form>


               <section>

                   <div style={{display:"grid",gridTemplateColumns:"350px 450px"}}>
                        <table id="account_info_table1">
                            <tr>
                                <th colSpan="2" style={{border:"4px solid purple"}}
                                className="w3-center">ACCOUNT INFORMATION</th>
                            </tr>

                        
                                <tr>
                                    <td style={{border:"4px solid purple"}}><b>Name: <br/>{datainput.name1 || ""}</b></td>
                                    <td style={{border:"4px solid purple"}}><b>Email: <br/>{datainput.email1 || ""}</b></td>
                                </tr>
                                <tr>
                                    <td style={{border:"4px solid purple"}}><b>Comment: <br/>{comment || ""}</b></td>
                                    <td style={{border:"4px solid purple"}}><b>Account select: <br/>{accountselect || ""}</b></td>
                                </tr>
                            
                         
                        </table>


                        <div>
                            <img src={Comp1img} alt="company1 image" width="100%" height="400px"/>
                        </div>
                   </div>
                     




                        <div>
                            <img src={Comp2img} alt="company1 image" width="100%" height="400px"/>
                        </div>
                       
               </section>
        </article>
    )

}

class Page1_Content1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {unlockcontentid:"************"}
    }
    static getDerivedStateFromProps(props,state){
        return {unlockcontentid:props.ulckctnd}
    }
    render(){
        var Form_content;
        if(this.props.ulckctnd === "wertydfgh456"){  // I want the content only be unlocked when
            // I call the props with the correct value of this component from index.js file
            Form_content = <Page1_Form_Content1/>;
        }else{
            Form_content = <h1>!!!Error 404 Code!!!</h1>
        }
        return (
            <>
            {Form_content}
            </>
        )
    }
}
export default memo(Page1_Content1);