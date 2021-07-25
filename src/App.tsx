import "./App.css";
import Nav from "./nav/Nav";
import Crousel from "./crousel/Crousel";
import List from "./note/noteList";
import Article from "./forArticle/Article";
import Event from "./forevent/Event";
function App() {
  return (
    <>
      <div className="App">
        <Nav></Nav>
        <Crousel></Crousel>
        <div className="card">
          <h2> Welcome to SRIST space </h2>
          <br />
          A Online community where students of srist can post notes, host
          events, ask help, poll.
          <br />
          Have Fun !!
        </div>
        <List></List>
        <Article></Article>
        <br></br>
        <Event></Event>
      </div>
    </>
  );
}

export default App;
