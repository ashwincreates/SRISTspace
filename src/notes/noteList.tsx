import "./note.css";
import Recent from "./subjects/recent";
function NoteList() {
    return(
        <>
        <div className="head">
          <div className="section-title">
            <h2>Newly Uploaded Notes</h2>
            <h1>Fresh upload</h1>
          </div>
          <button className="explore">Explore &#62;</button>
        </div>
        
           <Recent/>
 
        </>
    );
}
export default NoteList;
