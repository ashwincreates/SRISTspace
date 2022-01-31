import Ecard from "./Ecard";
import React, { Fragment } from "react";
import { BiImageAdd } from 'react-icons/bi';
import { Transition, Dialog } from "@headlessui/react";

function Event() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventVenue, setEventVenue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setImage("");
  };

  const handleSubmit = () => {
    setEventName("");
    setEventVenue("");
    setImage("");

    if (eventName !== "" && eventVenue !== "" && image !== "") {
      console.log("event sunmitted");
      let resobj = {
        eventname: eventName,
        eventvenue: eventVenue,
        image: image,
        likes: 0,
      };
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resobj),
      };
      fetch("https://sristspace.herokuapp.com/uploadEvent", options).then(
        (response) => response.json()
      );
      console.log(resobj);
      setEventName("");
      setEventVenue("");
      setImage("");
    } else {
      alert("plz fill the data");
    }
  };
  const onChange = (event: any) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (ev: any) => {
        setImage(ev.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="w-full h-[200px] flex items-center justify-center flex-col bg-cover bg-center rounded-md mt-4" style={{backgroundImage: "url(https://res.cloudinary.com/sristspace/image/upload/v1630644140/Frame_11_xygmnt.png)"}}>
        <h2 className="text-xl font-bold"> Event</h2>

        <p>Show ur participation and Host new events</p>
        <button
          onClick={handleClickOpen}
          className="px-5 py-2 mt-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg"
        >
          Host a Event
        </button>
      </div>
      <div className="py-6 text-lg font-bold text-gray-900">
        Coming Up this Week
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Ecard />
      </div>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={handleClose}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md sm:max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 py-2 text-lime-600"
                >
                  Host a Event
                </Dialog.Title>
								<div className="flex mt-4 gap-x-4 flex-row">
                <div className="flex flex-col gap-y-4 basis-1/2">
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="p-2 border rounded-lg focus:outline-lime-500"
                    onChange={(e) => {
                      setEventName(e.target.value);
                    }}
                  />
                  <textarea
										rows={8}
                    placeholder="Event Venue"
                    className="p-3 border rounded-lg resize-none"
                    onChange={(e) => {
                      setEventVenue(e.target.value);
                    }}
                  />
                </div>
                <div className="relative basis-1/2 overflow-hidden">
                  <img src={image}></img>
                  <input type="file" id="file" className="hidden" onChange={onChange} />
                  {image ? (
                    ""
                  ) : (
                    <label className="flex flex-col cursor-pointer rounded-lg hover:bg-gray-100 gap-y-4 absolute top-0 left-0 h-full w-full items-center justify-center" htmlFor="file">
											<BiImageAdd className="text-gray-500" size={28}/>
                      Add Event Image <br/> (Required ratio 4:5)
                    </label>
                  )}
                </div>
								</div>
                <button className="px-5 py-2 mt-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg" onClick={handleSubmit}>
                  Host Event !
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Event;
