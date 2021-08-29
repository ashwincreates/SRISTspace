import React from 'react';
import './Slidecrousel.css';


interface slideStates  {
    images:Array<string>;
    index:number;
    items:number;
}

interface props{

}

export default class Slidecrousel extends React.Component<props , slideStates>{


constructor(props:any){
    super(props);
    this.state = {
        items:0,
        index:0,
        images:["https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg"] 
    }
}

changeImage(){

}


render (){


return(
<div className = "fragment">

<img
alt = "" 
className = "imageBack" src = {this.state.images[this.state.index]} 
onTransitionEnd = {this.changeImage}
/>

</div>

);

}





}

