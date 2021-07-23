import "./list.css";
function List() {
    return(
        <>
        <div className="head">
        <h2>New Uploads Notes</h2>
        <h1>Fresh upload</h1>
        <button className="explore">Explore</button>
        </div>
        <div className="card">
        <div className=" row">      
  <div className="column">
    <div className="card-title">
      <h3>Card 1</h3>
      <span>Some text<br/></span>
      <button>learn more</button>
    </div>
  </div>
  <div className="column">
    <div className="card-title">
      <h3>Card 3</h3>
      <span>Some text<br/></span>
      <button>learn more</button>
    </div>
  </div>
  <div className="column">
    <div className="card-title">
      <h3>Card 3</h3>
      <span>Some text<br/></span>
      <button>learn more</button>
    </div>
  </div>
  <div className="column">
    <div className="card-title">
      <h3>Card 4</h3>
      <span>Some text<br/></span>
      <button>learn more</button>
    </div>
  </div>
  </div>
  </div>
        </>
    );
}
export default List;