import React from "react";
import { RouteComponentProps } from "react-router";
import "../articles/article.css";
import { Note,IEvent } from "../models/models";
import  Ecard  from "../events/Ecard";


interface locstate {
  state: string;
eventname:string;
eventvenue:string;

}
interface searchstate {
notelist:Note[];
//articlelist:Article[];
eventlist:IEvent[];
}

function Notecard(props: any) {
  return (
    <>
      <div className="card-md">
        <h1>{props.subject}</h1>
        <span>{props.topic}</span>
      </div>
    </>
  );
}

function Eventcard(props: any) {
  return (
    <>
      <div className="event-post">
        <h2>{props.name}</h2>
        <p>{props.venue}</p>
      </div>
    </>
  );
}


class Search extends React.Component<
  RouteComponentProps<locstate>,
  { notelist: Note[],eventlist:IEvent[]}
> {
  constructor(props: any) {
    super(props);
    this.state = {
      notelist: [],
       eventlist:[{eventdate:"27-07-19",
       id:"asdfsfs",
eventname:"Movie Show",
eventvenue
:
"A Movie Show is being organized in the college autditorium all the stu...",
image
:
"http://res.cloudinary.com/sristspace/image/upload/v1629978235/wfhgq3z7..."}],
    };
    this.URL = "https://sristspace.herokuapp.com";
  }

  URL: any;

  render() {
    fetch(this.URL + "/getNotesBySearch/" + this.props.location.state)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notelist: data.data,
        });
      })
   
    fetch(this.URL + "/getNotesBySearch/" + this.props.location.state)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          eventlist: data.events,
        });
      })
  
      .catch((error) => {
        console.log(error);
        console.log(this.state.notelist);
      });

    let cards: any;
    cards = this.state.notelist.map((note) => (
      <Notecard topic={note.topic} subject={note.subject} />
    ));

//  let  Ecards:any;
//   Ecards= this.state.eventlist.map((item)=>(
//       <Eventcard name={item.eventname} venue={item.eventvenue} />
//     ));

    return (
      <>
      
        <div className="head">
          <h2>Search result for "{this.props.location.state}"</h2>
        </div>
        <div className="item-tray">{cards}</div>
        <div className="item-tray"><Ecard/></div>
      </>
    );
  }
}

export default Search;
