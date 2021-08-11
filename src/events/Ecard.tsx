import React,{ useState } from "react";
import Edata from "./Edata";
import "../notes/note.css";
import "./event.css";
import ReactDOM, { render } from 'react-dom';

function Card(props:any){
     let state=true;
    const [count,setcount]=useState(120);
    const grey="#808080";
    const [bg,setBg]=useState(grey);
    function Click(){
        let newBg="	#ff0000";
        if(state){
      setcount(count-1);
       setBg(newBg);
        }
  
 
}
    return(
        <>
         <div className="thumbnail"><img src={props.image} alt ="load..." />
          <div className="content">
            <h2 className="data">
              {props.name} <span style={{backgroundColor:bg}} className="like"><button className="click"  onClick={Click}></button></span><span className="count">{count}Likes </span>
            </h2>
            <span>{props.venue}</span><br/>
            <span>{props.date}</span><br/>
            <span>{props.time}</span><br/>
            <p>
              this is a annual event which is inaugrated by the college department so please take participation more and more.
            </p>
            </div>
          </div>
        </>
    )
}
function Ecard() {
    // const state=useState();
 
    return(
        <>
        {Edata.map((item)=>{
return(
         <div className="card-post">
        <Card name={item.name} venue={item.venue} time={item.time} date={item.date} image={item.image} />
        </div>
         );
          })}
        </>
    )
}
export default Ecard;