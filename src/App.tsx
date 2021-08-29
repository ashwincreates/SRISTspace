import "./App.css";
import Crousel from "./crousel/Crousel";
import NoteList from "./notes/noteList";
import "./notes/note.css";
import ArticleList from "./articles/articleList";
import "./articles/article.css";
import EventList from "./events/eventList";

function App() {
  return (
    <>
      <div className="App">
        <Crousel></Crousel>
        <NoteList></NoteList>
        <ArticleList></ArticleList>
        <EventList></EventList>
      </div>
    </>
  );
}

export default App;
