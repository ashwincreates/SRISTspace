import React, { Component, useEffect, useRef } from "react";
import "./Slidecrousel.css";

interface slides {
  id: string;
  img: string;
}

interface slideStates {
  images: Array<string>;
  index: number;
  items: Array<slides>;
  refArr: Array<Object>;
  scrollable:boolean;
}

interface props {
scrollable:boolean;

}

export default class Slidecrousel extends React.Component<props, slideStates> {
  divRef = [React.createRef<HTMLElement>(), React.createRef<HTMLElement>() , React.createRef<HTMLElement>()];

  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
          id: "0",
          img: "https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg",
        },
        {
          id: "1",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        },{
          id:"2" , img : "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
      index: 0,
      images: [
        "https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      ],
      refArr: [],
      scrollable:true
    };

    this.changeImageForward = this.changeImageForward.bind(this);
    this.changeImageBackWard = this.changeImageBackWard.bind(this);
  }

  changeImageForward() {
    if (this.state.index < this.state.items.length - 1 ){
      var a = this.state.index+1 
      this.divRef[a].current?.scrollIntoView();
      this.setState({index:a})
    }
  
  }

  changeImageBackWard(){

    if (this.state.index < this.state.items.length && this.state.index > 0){
      var a = this.state.index-1
      this.divRef[a].current?.scrollIntoView();
      this.setState({index:a})
    }
    
  }

  checkScrollable(){
    this.setState({scrollable:false})
    alert("scroll")
  }

  componentDidMount(){
const interval = setInterval(()=>{
      if (this.state.index < this.state.items.length - 1){
        var intRef = this.state.index+1;
        var stringRef = intRef+"";
        this.divRef[stringRef].current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        this.setState({index:intRef})
      }else {
this.setState({index:0})
this.divRef[this.state.index+""].current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }
} , 3000)

document.body.addEventListener("scroll" , this.checkScrollable ,false)

if (!this.props.scrollable){
  clearInterval(interval)
}



}

componentWillUnmount(){
  this.setState({scrollable:false})
}


   
  render() {

    return (
      <div className = "super">
     
      <div className="fragment">
        {/* <img
alt = "" 
className = "imageBack" src = {this.state.images[this.state.index]} 
onTransitionEnd = {this.changeImage}
/> */}
        {this.state.items.map((item) => (
          <div ref={this.divRef[item.id]}>
            <img className="imageBack" alt="" src={item.img} />
          </div>
        ))}


      </div>
     
        <div className = "forward">
          <img style = {{
            height:"50px",
            width:"50px"
          }} src = {process.env.PUBLIC_URL + "/arrowr.png"} alt = "" onClick={this.changeImageForward} />
        </div>

        <div className = "backward">
<img style = {{
  height:"50px" ,
  width:"50px"
}} alt = "" src = {process.env.PUBLIC_URL + "/arrow.png"} onClick = {this.changeImageBackWard}/>

        </div>
       
      </div>
    );
  }
}
