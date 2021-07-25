
import './App.css';
import { Switch,Route } from "react-router-dom";
import Nav from './nav/Nav';
import Crousel from './crousel/Crousel';
import About from './about/About';
import List from "./note/noteList";
import Article from "./forarticle/article";
import Event from "./forevent/Event";

function App() {
  return (
    <>

    <div className="App">
      <Nav></Nav> 
      <Switch>
      <Route exact path='/about' component={About} />
      <Route exact path='/notelist' component={List} />
      <Route exact path='/event' component={Event} />
      </Switch>
      <Crousel></Crousel>
      <div className="card">
        <h2> Welcome to SRIST space </h2>
        <br />
        A Online community where students of srist can post notes, host events, ask help, poll.
        <br />
        Have Fun! 
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
