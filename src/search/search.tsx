import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import "../articles/article.css";
import { Note,IEvent,Article } from "../models/models";
import  Ecard  from "../events/Ecard";
import Icons from "../icons/icons";

interface locstate {
  state: string;


}
interface searchstate {
notelist:Note[];
articlelist:Article[];
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
function Articlecard(props: any) {
  return (
    <>
      
        <div className="article-info">
        <span>{props.author ? props.author : "unknown"}</span>
        <h3 className="article-title">{props.title.replace("<br>", "")}</h3>
        <h1>{props.date as Date}</h1>
      </div>
      
    </>
  );
}

function Eventcard(props: any) {
  const [state, setState] = useState(true);
  const [count, setcount] = useState(120);
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

  return (
    <>
    <div className="event-post">
      <div className="thumbnail post">
        <img className="event-image post" src={props.image} alt="load..." />
      </div>
      <div className="content">
        <div className="button-tray">
          <span
            className={"like ".concat(state ? "" : "filter")}
            onClick={Click}
          >
            <Icons name="party_active" />
            <div className={state ? "" : "liked"}>{count}</div>
          </span>
        </div>
        <h2 className="data">{props.name} </h2>
        <p>{props.venue}</p>
      </div>
      </div>
    </>
  );
}


class Search extends React.Component<
  RouteComponentProps<locstate>,
  { notelist: Note[],eventlist:IEvent[],articlelist:Article[],}
> {
  constructor(props: any) {
    super(props);
    this.state = {
      notelist: [],
       eventlist:[],
       articlelist:[],
    };
    this.URL = "https://sristspace.herokuapp.com";
  }

  URL: any;

  componentDidMount() {
	
    fetch(this.URL + "/getNotesBySearch/" + this.props.location.state)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notelist: data.notes,
           eventlist: data.events,
           articlelist:data.articles,
        });
	console.log(data)
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state.notelist);
      });
  }
 

  render() {

    let cards: any;
    cards = this.state.notelist.map((note) => (
      <Notecard topic={note.topic} subject={note.subject} />
    ));

 let  Ecards:any;
  Ecards= this.state.eventlist.map((item)=>(
      <Eventcard name={item.eventname} venue={item.eventvenue} image={item.image} />
    ));
 let  Acards:any;
  Acards= this.state.articlelist.map((item)=>(
      <Articlecard title={item.title} author={item.author} date={item.date}  />
    ));

    return (
      <>
      
        <div className="head">
          <h2>Search result for "{this.props.location.state}"</h2>
        </div>
        <div className="item-tray">{cards}</div>
        <div className="item-tray">{Ecards}</div>
        <div className="item-tray">{Acards}</div>
      </>
    );
  }
}

export default Search;
