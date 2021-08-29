import React from "react";
import { RouteComponentProps } from "react-router";
import "../articles/article.css";
import { Note } from "../models/models";
interface locstate {
  state: string;
}

function Card(props: any) {
  return (
    <>
   
      <div className="card-md">
        <h1>{props.subject}</h1>
        <span>{props.topic}</span>
      </div>
    </>
  );
}

class Search extends React.Component<
  RouteComponentProps<locstate>,
  { notelist: Note[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      notelist: [],
    };
    this.URL = "http://127.0.0.1:5000"/*"https://sristspace.herokuapp.com"*/;
  }

  URL: any;

  componentDidMount() {
	
    fetch(this.URL + "/getNotesBySearch/" + this.props.location.state)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notelist: data.notes,
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
      <Card topic={note.topic} subject={note.subject} />
    ));

    return (
      <>
      
        <div className="head">
          <h2>Search result for "{this.props.location.state}"</h2>
        </div>
        <div className="item-tray">{cards}</div>
      </>
    );
  }
}

export default Search;
