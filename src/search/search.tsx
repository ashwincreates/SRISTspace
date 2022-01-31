import React from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { Note, IEvent, Article } from "../models/models";

interface locstate {
  state: string;
}

function Notecard(props: any) {
  return (
    <>
      <div className="p-4 shadow-md h-[125px] flex flex-col-reverse border border-gray-100 rounded-lg">
        <h1 className="text-xl font-medium">{props.subject}</h1>
        <span className="text-gray-400">{props.topic}</span>
      </div>
    </>
  );
}
function Articlecard(props: any) {
  let history = useHistory();
  return (
    <>
      <div
        className="h-[150px] relative overflow-hidden rounded-lg after:absolute border after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:rounded-b-lg"
        onClick={() => {
          history.push("/articles/" + props.id);
        }}
      >
        <img src={props.image} />
        <div />
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg z-10">{props.title.replace("<br>", "")}</h3>
      </div>
    </>
  );
}

function Eventcard(props: any) {
  let history = useHistory();
  return (
    <>
      <div
        className="card-md w-[300px] h-[360px] rounded-lg overflow-hidden event-preview"
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
        <h2 className="text-xl font-bold my-4">
          Search result for <span>"{this.props.location.state}"</span>
        </h2>

        {this.state.notelist.length > 0 ? (
          <>
            <div className="my-4 font-bold text-gray-500">
              <h2 className="subsection">NOTES</h2>
            </div>
            <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-4">{cards}</div>
          </>
        ) : (
          ""
        )}

        {this.state.articlelist.length > 0 ? (
          <>
            <div className="my-4 font-bold text-gray-500">
              <h2 className="subsection">ARTICLES</h2>
            </div>
            <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-4">{Acards}</div>
          </>
        ) : (
          ""
        )}

        {this.state.eventlist.length > 0 ? (
          <>
            <div className="my-4 font-bold text-gray-500">
              <h2 className="subsection">EVENTS</h2>
            </div>
            <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">{Ecards}</div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Search;
