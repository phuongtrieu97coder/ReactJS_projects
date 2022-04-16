import React,{useState,memo} from "react";
import ReactDOM from "react-dom";
import Cr_img1 from "./image/car/bugatti5.jpg";
import Cr_img2 from "./image/car/bugatti9.jpg";
import Cr_img3 from "./image/car/mclaren_600LT.jpg";
import Cr_img4 from "./image/car/mclaren_720S.jpg";
import Cr_img5 from "./image/car/lamborghini_aventador2.jpg";
import Cr_img6 from "./image/car/lamborghini_veneno2.jpg";
import Cr_img7 from "./image/car/pagani_zonda2.jpg";
import Cr_img8 from "./image/car/pagani_huayra.jpg";
import Cr_img9 from "./image/car/pagani_huayra_21.jpg";


function Page2_Blockcode1(){
    return (
        <article id="Page2_article_block1">
               <section>
                     <img src={Cr_img1} alt="cr_img1" width="100%" height="400px"/>
                     <img src={Cr_img2} alt="cr_img2" width="100%" height="400px"/>
                     <img src={Cr_img3} alt="cr_img3" width="100%" height="400px"/>
               </section>

               <section>
                     <img src={Cr_img4} alt="cr_img4" width="100%" height="400px"/>
                     <img src={Cr_img5} alt="cr_img5" width="100%" height="400px"/>
                     <img src={Cr_img6} alt="cr_img6" width="100%" height="400px"/>
               </section>

               <section>
                     <img src={Cr_img7} alt="cr_img7" width="100%" height="400px"/>
                     <img src={Cr_img8} alt="cr_img8" width="100%" height="400px"/>
                     <img src={Cr_img9} alt="cr_img9" width="100%" height="400px"/>
               </section>
        </article>
//I want to make sure this page has 3 columns, each column has 3 car images
    )
}
export default memo(Page2_Blockcode1);