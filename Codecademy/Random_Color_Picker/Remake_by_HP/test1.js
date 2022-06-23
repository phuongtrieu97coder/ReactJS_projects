import React from "react";
export function Button(props){
   return (
    <>
          <button id='change_bg_color_butt1' name='change_bg_color_butt1' title='change_bg_color_button 1' 
      type='button' className='btn btn-dark text-white w3-hover-green w3-hover-text-white'
      onClick={props.refresh} style={{fontSize:"40px"}}
       datachangebgcolorbutt='change_bg_color_button_data'>
        <i className='fa fa-refresh fa-spin'></i> Change BG Color
        </button>

    </>
   )
}
