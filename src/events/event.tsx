import "../notes/note.css";
import "./event.css";
import Ecard from "./Ecard";

import "../articles/article.css";
function Event() {
  return (
    <>
      <div className="header">
          <h2 className="title-text"> Event</h2>

          <p>
            Show ur participation and Host new events
          </p>
          <button onClick={Ecard} className="explore">Host a Event</button>
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
