import "./note.css";
import "../articles/article.css";
import Subjects from "./subjects/subjects";
import Recent from "./subjects/recent";
import Icons from "../icons/icons";


function Notes() {
  return (
    <>
      <div className="header">
          <div className="title-text"> Notes </div>
          <p>
		All Notes for every branch available here
          </p>
      </div>
     
      <Subjects />
     
      <div className="head">
        <div className="section-title">
          <h2>Newly Uploaded Notes</h2>
          <h1>Fresh upload</h1>
        </div>
      </div>
     <Recent />
     <br/>
    </>
  );
}

export default Notes;
