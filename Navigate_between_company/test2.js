import React,{useMemo,memo,useState,useContext,createContext,useEffect} from "react";
import ReactDOM from "react-dom";
import Comp_1img from "./image/company1.jpg";
import Comp_2img from "./image/company2.jpg";
import Comp_3img from "./image/company3.jpg";
import Carimg_1 from "./image/car/car_wallpaper0.jpg";
import Carimg_2 from "./image/car/car_wallpaper1.jpg";
import Carimg_3 from "./image/car/car_wallpaper5.jpg";
import Carimg_4 from "./image/car/car_wallpaper6.png";
import Carimg_5 from "./image/car/car_wallpaper7.jpg";
import Carimg_6 from "./image/car/car_wallpaper8.jpg";

var External_Img_data = {
     Img1:Comp_1img,
     Img2:Comp_2img,
     Img3:Comp_3img,
     Img4:Carimg_1,
     Img5:Carimg_2,
     Img6:Carimg_3,
     Img7:Carimg_4,
     Img8:Carimg_5,
     Img9:Carimg_6

}

var External_Img_Context = createContext(External_Img_data);


function Page2_Content1(){
    var [Etlgd,setEtlgd] = useState(External_Img_data);
    return (
        <External_Img_Context.Provider value={External_Img_data}>
               <Page2_Content2 Pgct2_prop1={External_Img_data}/>
        </External_Img_Context.Provider>
    )
}


function Page2_Content2(){
    return <Page2_Content3/>
}
function Page2_Content3(){
    return <Page2_Content4/>
}
function Page2_Content4(){
    var Use_External_Img_Context = useContext(External_Img_Context);
    return (
        <article>
                 <section>
                     <img src={Use_External_Img_Context.Img7} alt="Img5" width="100%" height="500px"/>
                 </section>

                 <section style={{display:"grid",gridTemplateColumns:"600px 750px"}}>
                         <div>
                                <div>
                                <img src={Use_External_Img_Context.Img1} alt="Img5" width="100%" height="500px"/>

                                </div>


                                <div>
                                <img src={Use_External_Img_Context.Img2} alt="Img5" width="100%" height="500px"/>
                                </div>
                         </div>


                         <div>
                                <div>
                                <img src={Use_External_Img_Context.Img3} alt="Img5" width="100%" height="500px"/>
                                </div>



                                <div style={{display:"grid",gridTemplateColumns:"380px 380px"}}>
                                    <div>
                                    <img src={Use_External_Img_Context.Img4} alt="Img5" width="100%" height="500px"/>
                                    </div>
                                    <div>
                                    <img src={Use_External_Img_Context.Img6} alt="Img5" width="100%" height="500px"/>
                                    </div>
                                </div>
                         </div>
                 </section>



                 <section style={{display:"grid",gridTemplateColumns:"450px 450px 450px"}}>
                           <div>
                           <img src={Use_External_Img_Context.Img5} alt="Img5" width="100%" height="500px"/>
                           </div>

                           <div>
                           <img src={Use_External_Img_Context.Img8} alt="Img5" width="100%" height="500px"/>
                           </div>

                           <div>
                           <img src={Use_External_Img_Context.Img9} alt="Img5" width="100%" height="500px"/>
                           </div>
                 </section>
        </article>
    )
}




export default memo(Page2_Content1);