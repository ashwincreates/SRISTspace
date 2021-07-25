import './App.css';
import { Switch,Route } from "react-router-dom";
import Nav from './nav/nav';
import Crousel from './crousel/Crousel';

import Note from './notes/notes';
import Article from './articles/article';
import About from './about/about';
import Event from './events/event';

import NoteList from "./notes/noteList";
import ArticleList from "./articles/articleList";
import EventList from "./events/eventList";

function App() {
  return (
    <>

    <div className="App">
      <Nav></Nav> 
      <Switch>
        <Route exact path='/notes' component={ Note } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/articles' component={ Article } />
        <Route exact path='/events' component={ Event } />
      </Switch>
      <Crousel></Crousel>
      <div className="card">
        <h2> Welcome to SRIST space </h2>
        <br />
        A Online community where students of srist can post notes, host events, ask help, poll.
        <br />
        Have Fun! 
      </div>    
      <NoteList></NoteList>
      <ArticleList></ArticleList>
      <EventList></EventList>
    </div>
 
    </>
  );
}

export default App;
