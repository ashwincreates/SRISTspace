import React from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { Note, IEvent, Article } from "../models/models";

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
  let history = useHistory();
  return (
    <>
      <div
        className="card-md preview"
        onClick={() => {
          history.push("/articles/" + props.id);
        }}
      >
        <img src={props.image} />
        <div />
        <h3>{props.title.replace("<br>", "")}</h3>
      </div>
    </>
  );
}

function Eventcard(props: any) {
  let history = useHistory();
  return (
    <>
      <div
        className="card-md event-preview"
        onClick={() => {
          history.push("/events/");
        }}
      >
        <img src={props.image} />
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
      <Eventcard image={item.image} />
    ));

    let Acards: any;
    Acards = this.state.articlelist.map((item: any) => (
      <Articlecard title={item.title} image={item.cap_image} id={item._id} />
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
            <div className="tray margin-full">{Ecards}</div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Search;
