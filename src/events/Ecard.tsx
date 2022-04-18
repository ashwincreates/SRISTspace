import { useEffect, useState } from "react";
import { IEvent } from "../models/models";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Icons from "../icons/icons";

function Card(props: any) {
  const [state, setState] = useState(true);
  const [count, setcount] = useState(props.likes);
  function Click() {
    if (state) {
      setcount(count + 1);
      setState(false);
    } else {
      setcount(count - 1);
      setState(true);
    }
    console.log(state);
  }

  useEffect(() => {
    let URL = "https://sristspace.herokuapp.com"
    fetch(URL + "/updateEvent/" + props.id + "/" + count)
  }, [count])

  return (
    <>
      <div className="sm:h-[500px] overflow-hidden">
        <img className="w-full rounded-t-md" src={props.image} alt="load..." />
      </div>
      <div className="p-4">
        {/*<div className="w-full">
          <span
            className={"flex gap-x-3 items-center"}
            onClick={Click}
          >
            {state?<AiOutlineHeart size={24} className="text-gray-900"/>:<AiFillHeart className="text-rose-500" size={24}/>}
            <div className={state ? "" : "liked" + "text-lg text-medium"}>{count}</div>
          </span>
      </div>*/}
        <h2 className="text-md font-medium mt-2 text-gray-900">{props.name} </h2>
        <p className="text-gray-500">{props.venue}</p>
      </div>
    </>
  );
}

function EmptyCard() {
  return (
    <>
      <div className="h-[500px] flex flex-col overflow-hidden">
        <div className="grow bg-gray-300 rounded-md animate-pulse"></div>
        <div className="p-3">
          {/*<div className="w-full">
            <span className="">
							<AiOutlineHeart size="24" className="text-gray-400 animate-pulse"/>
            </span>
        </div>*/}
          <h2 className="mt-2 h-4 bg-gray-300 rounded-full animate-pulse"></h2>
          <div className="mt-2 h-2 bg-gray-300 rounded-full animate-pulse"/>
          <div className="mt-1 h-2 bg-gray-300 rounded-full animate-pulse"/>
        </div>
      </div>
    </>
  );
}

function Ecard() {
  const [List, setList] = useState([] as IEvent[]);
  console.log(List.length)
  useEffect(() => {
    fetch("https://sristspace.herokuapp.com/fetchEvents")
      .then((res) => res.json())
      .then((data) => {setList(data.data); console.log(data)})
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {(List.length > 0)
        ? List.map((item : any) => {
            return (
              <div className="shadow-lg rounded-md">
                <Card
                  name={item.eventname}
                  venue={item.eventvenue}
                  image={item.image}
		  likes={item.likes as number}
		  id={item._id}
                />
              </div>
            );
          }):[1,2,3].map(() => <div className="shadow-lg border border-gray-100 rounded-md"><EmptyCard/></div>)} 
    </>
  );
}

export default Ecard;
