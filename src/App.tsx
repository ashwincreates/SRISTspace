import ArticleList from "./articles/articleList";
import EventList from "./events/eventList";
import Slidecrousel from "./crousel/Slidecrousel";

function App() {
  let notification = [
    {
      id: "1",
      text: "Web Development workshop being held. For more infomation visit the event page",
    },
    { id: "2", text: "New time table for 5th sem students has been released" },
    { id: "3", text: "Important notice for midsem decalaration" },
    {
      id: "4",
      text: "Important notice regarding practicals for 4th sem students",
    },
  ];

  return (
    <>
      <div className="App">
        <Slidecrousel />
        <div className="py-6 text-lg font-medium text-gray-900">
          Important Notices
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notification.map((item) => (
            <div className="shadow-md relative p-4 border border-gray-100 rounded-lg before:h-full before:w-1 before:absolute before:left-0 before:bg-lime-600 before:rounded-l-lg before:top-0">
              <div className="">{item.text}</div>
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
