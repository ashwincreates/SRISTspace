import "../notes/note.css";
import "./article.css";


function Article() {
  return (
    <>
      <div className="header">
          <h3 className="title-text"> Article </h3>  
          <p>
            Articles written by everyone. Write your own too 
          </p>
          <button className="explore">Write a article</button>
          
        <input
            className="search"
            name="search"
            type="text"
             placeholder="search Subject,topics..."
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
