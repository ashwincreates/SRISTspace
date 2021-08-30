import React, {useRef} from 'react';
import './Slidecrousel.css';



interface slideStates  {
    images:Array<string>;
    index:number;
    items:Array<number>;
  
}

interface props{

}

export default class Slidecrousel extends React.Component<props , slideStates>{


constructor(props:any){
    super(props);
    this.state = {
    
        items:[0,1],
        index:0,
        images:["https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg" , 
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"] 
    }

    
}




changeImage(){

}




render (){


return(
<div className = "fragment">

{/* <img
alt = "" 
className = "imageBack" src = {this.state.images[this.state.index]} 
onTransitionEnd = {this.changeImage}
/> */}
{this.state.items.map((key)=>(
    <div>
        <img
        className = "imageBack"
        alt = ""
        src = {this.state.images[key]}
        />
    </div>
))}



</div>

);

}





}

