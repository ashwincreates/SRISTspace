import React,{ useState } from "react";
import "../articles/article.css";
import Sdata from "./Sdata";

  
function Searchcard() {
 const [filter,setFilter]=useState("");

const searchtext=(event)=>{
  setFilter(event.target.value);
}
let data=Sdata.filter(item=>{
return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
});
  return (
    <>
 <input
          className="search"
          type="text"
          placeholder="search Subject,topics..."
          id="myInput"
          value={filter}
          onChange={searchtext}
        />
      <div  className="head">
        <div className="section-title">
          <h2> Notes</h2>
          
        </div>
       
      </div>
      <div className="tray">
      {data.map((val)=>{
      return(
      <>
        <div className="note-card">
          <div>
            <h3>{val.title}</h3>
            <span>
              {val.text}
              <br />
            </span>
          </div>
        </div>
      </>
      )
      } )}
        </div>
        
     
    </>
  );
}

export default Searchcard;
