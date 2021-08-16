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
  const [image, setImage] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("event sunmitted");
    let resobj = { eventname: "testevent", eventdate: "12-02-2021", image : image};
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resobj),
    };
    fetch("http://127.0.0.1:5000/uploadEvent", options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  function Eventpopup() {
    function onChange(event: any) {
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (ev: any) => {
          setImage(ev.target.result);
          console.log(ev.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    return (
      <>
        <div className="row">
          <div className="columnleft">
            <h2 className="poptitle">Host a Event</h2>

            <input type="name" placeholder="Event Name" className="popdata" />
            <br />
            <input
              style={{ opacity: 0.8 }}
              type="date"
              name="Event Date"
              className="popdata"
            />
            <br />
            <input type="name" placeholder="Event Venue" className="popdata" />
            <br />
            <button className="popbtn" onClick={handleSubmit}>
              Host Event !
            </button>
          </div>
          <div className="columnright">
		<img src={image}></img>
            <input type="file" id="file" onChange={onChange} />
            <label id="content" htmlFor="file">
              {" "}
              upload a banner{" "}
            </label>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="header">
        <h2 className="title-text"> Event</h2>

        <p>Show ur participation and Host new events</p>
        <button onClick={handleClickOpen} className="explore">
          Host a Event
        </button>
      </div>
      <div className="head">
        <h2 className="subject">Coming Up This Week</h2>
      </div>

      <div className="item-tray">
        <Ecard />
      </div>
      <Dialog open={open}>
        <div className="event-card">
          <Eventpopup />{" "}
        </div>
      </Dialog>
    </>
  );
}

export default Event;
