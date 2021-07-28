import "../notes/note.css";
import "./article.css";
function Article() {
  return (
    <>
      <div className="header">
        <div className="content">
          <h3 className="title-text"> Article </h3>  
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
          <button className="explore">Explore &#62;</button>
        </div>
        <input
            className="search"
            name="search"
            type="text"
            placeholder="search here"
        />
      </div>
      <div className="head">
        <div className="section-title">
          <h2>Top Trending Article</h2>
        </div>
      </div>
      <div className="item-tray">
        <div className="card-md">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="card-md">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="card-md">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="card-md">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="card-md">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
        <div className="card-md">
          <div>
            <h3>Card 1</h3>
            <span>
              Some text
              <br />
            </span>
          </div>
        </div>
      </div>
      <div className="head">
        <div className="section-title">
          <h2>Explore articles</h2>
        </div>
        <button className="explore">Explore &#62;</button>
      </div>
      <div className="flex">
        <div className="section">
          <div className="card-lg">
            <div>
              <h3>Card 1</h3>
              <span>
                Some text
                <br />
              </span>
            </div>
          </div>
          <div className="card-lg">
            <div>
              <h3>Card 1</h3>
              <span>
                Some text
                <br />
              </span>
            </div>
          </div>
          <div className="card-lg">
            <div>
              <h3>Card 1</h3>
              <span>
                Some text
                <br />
              </span>
            </div>
          </div>
       </div>
       <div className="chip-tray">
          Sort by
        </div>
      </div>
    </>
  );
}



export default Article;
