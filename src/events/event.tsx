import "../notes/note.css";
import "./event.css";
import Ecard from "./Ecard";
import React from "react";
import { useState } from "react";
import "../articles/article.css";
import Dialog from "../dialog/dialog";


 




function Event() {
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
 function Eventpopup() {
  return(
    <>
    <div className="row">
    <div className="columnleft">
  <h2 className="poptitle">Host a Event</h2>
  <input type="name" placeholder="Event Name" className="popdata" /><br/>
  <input type="name" placeholder="Event Date" className="popdata" /><br/>
  <input type="name" placeholder="Event Venue" className="popdata" />
  <br/><button className="popbtn" onClick={handleClose}>Host Event !</button>
    </div>
    <div className="columnright"><div className="popimg ">upload a banner</div></div>
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
