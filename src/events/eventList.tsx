import "./event.css";
import {IEvent} from "../models/models";
import {useEffect, useState} from "react";
import { useHistory } from "react-router";



function EventList() {
  let [events, setevents] = useState([] as IEvent[]);

  let URL = "https://sristspace.herokuapp.com/fetchEvents";
let history = useHistory();
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setevents(data.data);
        }
      });
  }, []);
  return (
    <>
      <div className="head margin-full">
	<div className="section-title">
          <h2>Up Coming Events</h2>
	</div>
	<button>Explore</button>
      </div>
      <div className="tray margin-full">
         {events.map((item) => (
		<div className="card-md event-preview" onClick={()=>{history.push("/events/");}}>
			<img src={item.image}/>
		</div>
	))}
      </div>
    </>
  );
}
export default EventList;
