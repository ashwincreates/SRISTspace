import "../notes/note.css";
import "./event.css";
import Ecard from "./Ecard";
import React from "react";
import { useState } from "react";
import "../articles/article.css";
import Dialog from "../dialog/dialog";
import Icons from "../icons/icons";





function Event() {
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
 function Eventpopup() {
 function onChange(e) {
    let file=e.target.files[0];
      let reader = new FileReader();
      reader.onload = (ev: any) => {
        var art = document.getElementById("content");
        if (art) {
          var img = document.createElement("img");
          img.className = "event-image";
          img.src = ev.target.result;
          img.tabIndex = 0;
         
          art.insertBefore(img, art.children[art.children.length - 1]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
     
   
  return(
    <>
    <div className="row">
    <div className="columnleft">
  <h2 className="poptitle">Host a Event</h2>
  <input type="name" placeholder="Event Name" className="popdata" /><br/>
  <input style={{opacity:0.8}} type="date" name="Event Date" className="popdata" /><br/>
  <input type="name" placeholder="Event Venue" className="popdata" />
  <br/><button className="popbtn" onClick={handleClose}>Host Event !</button>
    </div>
    <div className="columnright">
    <input type="file" id="file" onChange={onChange}/>
          <label id="content" htmlFor="file"> upload a banner </label>
</div>
    </div>
    </>
  )
}

  return (
    <>
      <div className="header">
          <h2 className="title-text"> Event</h2>

          <p>
            Show ur participation and Host new events
          </p>
          <button onClick={handleClickOpen}   className="explore">Host a Event</button>
        </div>
      <div className="head">
        <h2 className="subject">Coming Up This Week</h2>
      </div>

      <div className="item-tray">
       <Ecard/>
      </div>
      <Dialog open = {open}><div className="event-card"><Eventpopup/> </div>
      </Dialog>
    </>
  );
}

export default Event;
