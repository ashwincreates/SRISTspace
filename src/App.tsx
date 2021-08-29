import "./App.css";
import Crousel from "./crousel/Crousel";
import NoteList from "./notes/noteList";
import "./notes/note.css";
import ArticleList from "./articles/articleList";
import "./articles/article.css";
import EventList from "./events/eventList";
import Slidecrousel from "./crousel/Slidecrousel";

function App() {
  return (
    <>
      <div className="App">
        <Crousel></Crousel>
{/* <Slidecrousel></Slidecrousel> */}
        <NoteList></NoteList>
        <ArticleList></ArticleList>
        <EventList></EventList>
      </div>
    </>
  );
}

export default App;
