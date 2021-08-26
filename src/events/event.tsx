import "../notes/note.css";
import "./event.css";
import Ecard from "./Ecard";
import React, { useEffect } from "react";
import { useState } from "react";
import "../articles/article.css";
import Dialog from "../dialog/dialog";
import Icons from "../icons/icons";

function Event() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventVenue, setEventVenue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
      setImage("");
  };


  const handleSubmit = () => {
      setEventName("");
      setEventVenue("");
      setImage("");
  
    if (
      eventName !== "" &&
      eventVenue !== "" &&
      image !== ""
    ) {
     
      console.log("event sunmitted");
      let resobj = {
        eventname: eventName,
        eventvenue: eventVenue,
        image: image,
      };
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resobj),
      };
      fetch("https://sristspace.herokuapp.com/uploadEvent", options).then(
        (response) => response.json()
      );
      console.log(resobj);
      setEventName("");
      setEventVenue("");
      setImage("");
    } else {
      // console.log(`${eventName} ${eventVenue} ${eventDate}`);
      alert("plz fill the data");
    
    }
  };
  const onChange = (event: any) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (ev: any) => {
        setImage(ev.target.result);
         
      };
      reader.readAsDataURL(event.target.files[0]);
    }

  };

  return (
    <>
      <div className="header">
        <h2 className="title-text"> Event</h2>

        <p>Show ur participation and Host new events</p>
        <button onClick={handleClickOpen} className="explore">
          Host a Event
        </button>
      </div>
      <div className="margin-full head">
        <h2 className="subject">Coming Up This Week</h2>
      </div>

      <div className="margin-full post-tray">
        <Ecard />
      </div>
      <Dialog open={open}>
        <div className="event-card">
          <div className="row">
            <div className="icon-button close" onClick={handleClose}>
              <Icons name="close"></Icons>
            </div>
            <div className="columnleft">
              <h2 className="poptitle">Host a Event</h2>

              <input
                type="text"
                placeholder="Event Name"
                className="popdata"
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
              />
              <textarea
                placeholder="Event Venue"
                className="popdata"
                onChange={(e) => {
                  setEventVenue(e.target.value);
                }}
              />
            </div>
            <div className="columnright">
              <img src={image} className="event-image"></img>
              <input type="file" id="file" onChange={onChange} />

              
              {image?"":<label className="upload" htmlFor="file">
		<Icons name="add_image"></Icons>
		<br/>
		Add Event Image
              </label>}
            </div>
              <button className="popbtn" onClick={handleSubmit}>
                Host Event !
              </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Event;
