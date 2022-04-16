import React,{useState,memo} from "react";
import ReactDOM from "react-dom";
import Comp_img1 from "./image/company1.jpg";
import Comp_img2 from "./image/company2.jpg";
import Comp_img3 from "./image/company3.jpg";
import "./test1.scss";

function Page1_form_blockcode(){
{
    /*
    This block is used to make a form and handle data.
    inputdata is used to handle name data input, and email data input
    commentdata is used to handle comment data input
    selectdata is used to handle select data input
    handledatainput1 function is used to called inside onChange event that attached 
    to each input element syntax
    preventSubmit function is used to prevent the form from submit data to web server

    */
}
     var [inputdata,setInputdata] = useState({});
     var [commentdata,setCommentdata] = useState("");
     var [selectdata,setSelectdata] = useState("Premium");

     function handledatainput1(event){
         var name = event.target.name;
         var value = event.target.value;
         setInputdata((val)=>({...val,[name]:value}));
     }

     var preventSubmit = (event) => {
         return event.preventDefault();
     }




     return (
         <section id="register_block_content">
               <form id="register_form" title="register_form" name="register_form" 
               data-form1="register_form_data" action="index.html" method="post" target="_self"
               encType="multipart/form-data" onSubmit={preventSubmit}
               >

                   <div className="w3-center w3-black w3-padding w3-text-aqua">
                            <h1><i className="fa fa-user"></i> REGISTER</h1>
                   </div>


                   <label htmlFor="name_input"><b>Name:</b></label><br/>
                   <input id="name_input" title="name_input" name="name1" type="text"
                   placeholder="Enter your name..." value={inputdata.name1 || ""} 
                   data-name-input="name_input_data" style={{width:"100%"}}
                   onChange={handledatainput1}/>



                    <label htmlFor="email_input"><b>Email:</b></label><br/>
                   <input id="email_input" title="email_input" name="email1" type="email"
                   placeholder="Enter your email..." value={inputdata.email1 || ""} 
                   data-email-input="email_input_data" style={{width:"100%"}}
                   onChange={handledatainput1}/>


                    <label htmlFor="account_input"><b>Account Selection:</b></label><br/>
                    <select id="account_input" name="account_select" style={{width:"100%"}}
                    value={selectdata} onChange={(event) => setSelectdata(event.target.value)}>
                            <option disabled>---Account-Select---</option>
                            <option value="Premium">Premium</option>
                            <option value="First-Class">First-Class</option>
                            <option value="High-Class">High-Class</option>
                            <option value="VIP">VIP</option>
                    </select>


                    <label htmlFor="comment_input"><b>Comment:</b></label><br/>
                   <textarea id="comment_input" title="comment_input" name="comment1"
                   placeholder="Enter your comment..." value={commentdata} 
                   data-comment-input="comment_input_data" style={{width:"100%"}}
                   onChange={(event)=>setCommentdata(event.target.value)}></textarea>


                        <button  id="register_butt" title="register_butt" 
                        name="register_butt" type="submit"
                        className="btn btn-dark btn-block text-info w3-hover-blue 
                        w3-hover-text-white" style={{fontSize:"40px"}}>
                            <i className="fa fa-sign-in"></i> REGISTER
                        </button>

               </form>

               <div>
                   <h1>Result:</h1><br/>
                   <h4>Name: {inputdata.name1 || ""}</h4><br/>
                   <h4>Email: {inputdata.email1 || ""}</h4><br/>
                   <h4>Account Select: {selectdata}</h4><br/>
                   <h4>Comment: {commentdata}</h4><br/>
               </div>
         </section>
     )
}

class Page1_blockcode1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            specialid:"43567577935667866795645676253",
            compimg1:Comp_img1,
            compimg2:Comp_img2,
            compimg3:Comp_img3

        }
    }
    static getDerivedStateFromProps(props,state){
        return {specialid:props.spclid}
    }
//I want to make sure "specialid" property inside "this.state" is being derived from props "spclid"

    render(){
        let unlock_content;
        if(this.props.spclid === "dfte35yu"){
            unlock_content = <Page1_form_blockcode/>;
        }else{
            unlock_content = <h1>Sorry, there was an error code 404 when loading your page's content!!!</h1>
        }
//unlock_content only render <Page1_form_blockcode/> component if props "spclid" = "dfte35yu"

        return (
             <article id="Page1_article_content_block">
              
                 <section id="register_block">{unlock_content}</section>

                 <section>
                      <img src={this.state.compimg1} alt="comp_image1" width="100%" height="400px"/>
                      <img src={this.state.compimg2} alt="comp_image2" width="100%" height="400px"/>
                      <img src={this.state.compimg3} alt="comp_image3" width="100%" height="400px"/>
                 </section>
             </article>
        )
//I want to make sure to use css grid to make 2 columns contents. One is for a form, one is for a block 
//contains 3 company images
    }

}

export default memo(Page1_blockcode1);


