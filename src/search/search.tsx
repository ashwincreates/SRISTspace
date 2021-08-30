import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import "../articles/article.css";
import { Note, IEvent, Article } from "../models/models";
import Icons from "../icons/icons";

interface locstate {
  state: string;
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
  {
    notelist: Note[];
    eventlist: IEvent[];
    articlelist: Article[];
    keyword: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyword: "",
      notelist: [],
      eventlist: [],
      articlelist: [],
    };
    this.URL = "https://sristspace.herokuapp.com";
  }

  URL: any;

  componentDidMount() {
    this.fetchResults();
  }

  fetchResults() {
    fetch(this.URL + "/getNotesBySearch/" + this.props.location.state)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notelist: data.notes,
          eventlist: data.events,
          articlelist: data.articles,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state.notelist);
      });
  }

  componentDidUpdate() {
    if (this.state.keyword != this.props.location.state) {
      this.setState({ keyword: this.props.location.state as string });
      this.fetchResults();
    }
  }

  render() {
    let cards: any;
    cards = this.state.notelist.map((note) => (
      <Notecard topic={note.topic} subject={note.subject} />
    ));

    let Ecards: any;
    Ecards = this.state.eventlist.map((item) => (
      <Eventcard
        name={item.eventname}
        venue={item.eventvenue}
        image={item.image}
      />
    ));
    let Acards: any;
    Acards = this.state.articlelist.map((item) => (
      <Articlecard title={item.title} author={item.author} date={item.date} />
    ));

    return (
      <>
        <h2 className="sea margin-full">
          Search result for <span>"{this.props.location.state}"</span>
        </h2>

        {this.state.notelist.length > 0 ? (
          <>
            <div className="head margin-full">
              <h2 className="subsection">NOTES</h2>
            </div>
            <div className="item-tray margin-full">{cards}</div>
          </>
        ) : (
          ""
        )}

        {this.state.articlelist.length > 0 ? (
          <>
            <div className="head margin-full">
              <h2 className="subsection">ARTICLES</h2>
            </div>
            <div className="item-tray margin-full">{Acards}</div>
          </>
        ) : (
          ""
        )}

        {this.state.eventlist.length > 0 ? (
          <>
            <div className="head margin-full">
              <h2 className="subsection">EVENTS</h2>
            </div>
            <div className="item-tray margin-full">{Ecards}</div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Search;
