import "./App.css";
import Crousel from "./crousel/Crousel";
import NoteList from "./notes/noteList";
import "./notes/note.css";
import ArticleList from "./articles/articleList";
import "./articles/article.css";
import EventList from "./events/eventList";
import Slidecrousel from "./crousel/Slidecrousel";

function App() {

	let notification = [1,2,3,4];

  return (
    <>
      <div className="App">
        <Crousel></Crousel>
		{/* <Slidecrousel/> */}
	<div className="head margin-full">
		<h2>Important Notices</h2>
	</div>
	<div className="item-tray margin-full">
		{notification.map((item) => (
			<div className="notify-md">
				<div className="icon"></div>
				<div className="tex">Some text with notification and links and information</div>
			</div>
		))}
	</div>
        <ArticleList></ArticleList>
        <EventList></EventList>
      </div>
    </>
  );
}

export default App;
