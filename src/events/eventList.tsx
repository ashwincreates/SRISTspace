import "./event.css";
import Ecard from "./Ecard";
function EventList() {
  return (
    <>
      <div className="head margin-full">
	<div className="section-title">
          <h2>Up Coming Event</h2>
          <h1>Fresh upload</h1>
	</div>
      </div>
      <div className="tray margin-full">
         <Ecard />
      </div>
    </>
  );
}
export default EventList;
