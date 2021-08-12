import "../notes/note.css";
import "./event.css";
import Ecard from "./Ecard";
import {useHistory, useRouteMatch} from "react-router";
import "../articles/article.css";
function Event() {
  let history = useHistory();
  return (
    <>
      <div className="header">
          <h2 className="title-text"> Event</h2>

          <p>
            Show ur participation and Host new events
          </p>
          <button onClick={() => {history.push(`events/addevent`)}} className="explore">Host a Event</button>
        </div>
      <div className="head">
        <h2 className="subject">Coming Up This Week</h2>
      </div>

      <div className="item-tray">
       <Ecard/>
      </div>
    </>
  );
}

export default Event;
