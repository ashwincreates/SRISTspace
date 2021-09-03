import "./App.css";
import "./notes/note.css";
import ArticleList from "./articles/articleList";
import "./articles/article.css";
import EventList from "./events/eventList";
import Slidecrousel from "./crousel/Slidecrousel";
// import Crousel from "./crousel/Crousel";

function App() {
  let notification = [
    { id: "1", text: "Web Development workshop being held. For more infomation visit the event page" },
    { id: "2", text: "New time table for 5th sem students has been released" },
    { id: "3", text: "Important notice for midsem decalaration" },
    { id: "4", text: "Important notice regarding practicals for 4th sem students" },
  ];

  

  return (

    <>
      <div className="App">
        {/*<Crousel></Crousel>*/}
        <Slidecrousel/>
        <div className="head margin-full">
          <h2>Important Notices</h2>
        </div>
        <div className="item-tray margin-full">
          {notification.map((item) => (
            <div className="notify-md">
              <div className="tex">{item.text}</div>
            </div>
          ))}
        </div>
        <ArticleList></ArticleList>
        <EventList></EventList>
      </div>
    </>
  );
}

/*
              <div className="icon">
                <h2 className="number">{item.id}</h2>
              </div>
*/
export default App;
