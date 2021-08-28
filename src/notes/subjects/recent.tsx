import React from "react";
import { RouteComponentProps } from "react-router";
import { Note } from "../../models/models";

function Card(props: any) {
  return (
    <>
    
      <div className="note-card">
        <h1>{props.subject}</h1>
        <span>{props.topic}</span>
      </div>
    </>
  );
}

class Recent extends React.Component< {}, { notelist: Note[] }> 
{
  constructor(props: any) {
    super(props);
    this.state = {
      notelist: [],
    };
    this.URL = "https://sristspace.herokuapp.com";
  }

  URL: any;

  render() {
    fetch(this.URL + "/getNotesByDrop/4/CS")
      .then((res) => res.json())
      .then((data) => {
        
        
        this.setState({
          notelist: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state.notelist);
      });

    let cards: any;
    cards = this.state.notelist.map((note) => (
      <Card topic={note.topic} subject={note.subject} />
    ));

    return (
      <>
       
        <div className="tray margin-full">{cards}</div>
      </>
    );
  }
}

export default Recent;
