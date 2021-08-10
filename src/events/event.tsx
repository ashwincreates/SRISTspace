import "../notes/note.css";
import "./event.css";
import Ecard from "./Ecard";

import "../articles/article.css";
function Event() {
  return (
    <>
      <div className="header">
        <div className="content">
          <h2 className="title-text"> Event</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="explore">Event &#62;</button>
        </div>
        <input
          className="search"
          name="search"
          type="text"
          placeholder="search Subject,topics..."
        />
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
