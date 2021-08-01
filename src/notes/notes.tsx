import "./note.css";
import "../articles/article.css";
import Subjects from "./subjects/subjects";

function Notes() {
  return (
    <>
      <div className="header">
        <div className="content">
          <h2 className="title-text"> Notes </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="explore">Explore &#62;</button>
        </div>
      </div>
      <Subjects />
      <div className="head">
        <div className="section-title">
          <h2>Newly Uploaded Notes</h2>
          <h1>Fresh upload</h1>
        </div>
        <button className="explore">Explore &#62;</button>
      </div>
      <div className="tray">
        <div className="note-card">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="note-card">
          <div>
            <h3>Card 3</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="note-card">
          <div>
            <h3>Card 3</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="note-card">
          <div>
            <h3>Card 4</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="note-card">
          <div>
            <h3>Card 5</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="note-card">
          <div>
            <h3>Card 6</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
