import './App.css';
import { useState } from 'react';
import Crousel from './crousel/Crousel';
import NoteList from "./notes/noteList";
import "./notes/note.css";
import ArticleList from "./articles/articleList";
import  "./articles/article.css";
import EventList from "./events/eventList";
import Login from './login/login';



function App() {

  
  return (
    <>

    <div className="App">
      <Login/>
    
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
