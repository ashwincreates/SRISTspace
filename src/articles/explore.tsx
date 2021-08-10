import {useHistory, useRouteMatch} from "react-router";

function Explore() {

let history = useHistory();

  return (
    <>
      <div className="header">
        <h3 className="title-text"> Article </h3>
        <p>Articles written by everyone. Write your own too</p>
        <button className="explore" onClick={() => {history.push(`articles/addarticle`)}}>Write a article</button>
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
      </div>
      <div className="head">
        <div className="section-title">
          <h2>Explore articles</h2>
        </div>
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
        </div>
        <div className="chip-tray">Sort by</div>
      </div>
    </>
  );
}

export default Explore;
