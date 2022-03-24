function Car1(props){
  
    return (
    <span>
        
        <b>Model:</b><i>{props.obj.model}</i> . 
        <b>Brand:</b><i>{props.obj.brand}</i> . 
        <b>Color:</b><i>{props.obj.color}</i>
        
    </span>
    )
}
function Car2(props){
   
    return (
        <span>
            
            <b>Model:</b><i>{props.obj.model}</i> . 
            <b>Brand:</b><i>{props.obj.brand}</i> . 
            <b>Color:</b><i>{props.obj.color}</i>
            
        </span>
        )
}
export {Car1,Car2};