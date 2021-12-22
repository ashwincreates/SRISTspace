import { IEvent } from "../models/models";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function EventList() {
  let [events, setevents] = useState([] as IEvent[]);

  let URL = "https://sristspace.herokuapp.com/fetchEvents";
  let history = useHistory();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setevents(data.data);
        }
      });
  }, []);

  return (
    <>
      <div className="flex my-2 justify-between items-center">
        <div className="py-6 text-lg font-medium text-gray-900">
          New Events
        </div>
        <button
          className="px-5 py-2 bg-lime-500 text-base hover:bg-lime-600 text-white font-medium rounded-lg"
          onClick={() => {
            history.push("/events/");
          }}
        >
          Explore more{" "}
        </button>
      </div>
      <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
        {events.map((item) => (
          <div
            className="card-md w-[300px] h-[360px] rounded-lg overflow-hidden event-preview"
            onClick={() => {
              history.push("/events/");
            }}
          >
            <img src={item.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default EventList;
