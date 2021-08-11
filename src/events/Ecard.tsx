import React,{ useState } from "react";
import Edata from "./Edata";
import "../notes/note.css";
import "./event.css";


function Ecard() {
    const state=useState();
    let t=true;
    const [count,setcount]=useState(120);
    const grey="#808080";
    const [bg,setBg]=useState(grey);
    function Click(){
        let newBg="	#ff0000";
      setcount(count+1);
     setBg(newBg);
}
    return(
        <>
        {Edata.map((item)=>{
return(
         <div className="card-post">
          <div className="thumbnail"><img src={item.image} alt ="load..." />
          <div className="content">
            <h2 className="data">
              {item.name} <span style={{backgroundColor:bg}} className="like"><button className="click"  onClick={Click}></button></span><span className="count">{count}Likes </span>
            </h2>
            <span>{item.venue}</span><br/>
            <span>{item.date}</span><br/>
            <span>{item.time}</span><br/>
            <p>
              this is a annual event which is inaugrated by the college department so please take participation more and more.
            </p>
            </div>
          </div>
        </div>
         );
          })}
        </>
    )
}
export default Ecard;
