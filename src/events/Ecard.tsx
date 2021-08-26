import React, { useEffect, useState } from "react";
import { IEvent } from "../models/models";
import "../notes/note.css";
import "./event.css";
import Icons from "../icons/icons";

function Card(props: any) {
  const [state, setState] = useState(true);
  const [count, setcount] = useState(120);
  function Click() {
    if (state) {
      setcount(count + 1);
      setState(false);
    } else {
      setcount(count - 1);
      setState(true);
    }
    console.log(state);
  }

  return (
    <>
      <div className="thumbnail post">
        <img className="event-image post" src={props.image} alt="load..." />
      </div>
      <div className="content">
        <div className="button-tray">
          <span
            className={"like ".concat(state ? "" : "filter")}
            onClick={Click}
          >
            <Icons name="party_active" />
            <div className={state ? "" : "liked"}>{count}</div>
          </span>
        </div>
        <h2 className="data">{props.name} </h2>
        <p>{props.venue}</p>
      </div>
    </>
  );
}

function EmptyCard() {
  return (
    <>
      <div className="event-post">
        <div className="thumbnail post empty"></div>
        <div className="content">
          <div className="button-tray">
            <span className={"like "}>
              <Icons name="party_active" />
              <div></div>
            </span>
          </div>
          <h2 className="data-empty"></h2>
          <div className="text-empty"/>
          <div className="text-empty"/>
        </div>
      </div>
    </>
  );
}

function Ecard() {
  const [List, setList] = useState([] as IEvent[]);
  console.log(List.length)
  useEffect(() => {
    fetch("https://sristspace.herokuapp.com/fetchEvents")
      .then((res) => res.json())
      .then((data) => setList(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {(List.length > 0)
        ? List.map((item) => {
            return (
              <div className="event-post">
                <Card
                  name={item.eventname}
                  venue={item.eventvenue}
                  image={item.image}
                />
              </div>
            );
          }):[1,2,3].map(() => <EmptyCard/>)} 
    </>
  );
}

export default Ecard;
