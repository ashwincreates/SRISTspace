import React from "react";
import Dialog from "../../dialog/dialog";
import Icons from "../../icons/icons";
import { Note } from "../../models/models";

//state and props for the class
interface State {
  semester: string;
  open: boolean;
  branch: string;
  notelist: {subject: string, code :number}[];
  links: {code: number, contents : string, topic: string,subject: string}[];
  loading: boolean;
  dirty: boolean;
  selected: number;
}

interface Props {}

//helper functions
function Card(props: any) {
  return (
    <>
      <div className="card-md">
        <h1>Subject</h1>
        <span>
          {props.subject}
          <br />
        </span>
      </div>
    </>
  );
}

function NoCard(props: any) {
  if (props.loading) {
    return (
      <div className="nocard">
        <Spinner></Spinner>
      </div>
    );
  } else {
    if (props.dirty) return <div className="nocard">Nothing here</div>;
    else {
      return (
        <div className="nocard">
          <span>Choose Subject and semester</span>
        </div>
      );
    }
  }
}

function Spinner() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

//Subject class
class Subjects extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      semester: "",
      branch: "",
      notelist: [],
      loading: false,
      dirty: false,
      open: false,
      selected: 0,
      links: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.URL = "https://sristspace.herokuapp.com";
    this.toggle = this.toggle.bind(this);
  }

  URL: any;

  handleChange(event: any) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      } as Pick<State, keyof State>,
      () => {
        console.log(this.state.semester + " " + this.state.branch);
        if (this.state.semester && this.state.branch != "") {
          this.handleSubmit(this.state.semester, this.state.branch);
          this.setState({
            notelist: [],
            loading: true,
            dirty: true,
          });
        }
      }
    );
  }

  handleSubmit(semester: string, branch: string) {
    fetch(this.URL + "/getNotesByDrop/" + semester + "/" + branch)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notelist: data.data,
          loading: false,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state.notelist);
      });
  }

  toggle(code: number) {
    this.setState({ open: !this.state.open, selected: code }, () => {
      if (this.state.semester && this.state.branch && this.state.selected){
        fetch(this.URL + "/getlinks/" + this.state.selected)
          .then((res) => res.json())
          .then((data) => {this.setState({links: data.data})})
          .catch((error) => console.log(error));}
    });
  }

  render() {
    let cards: any;
    if (this.state.notelist.length === 0) {
      cards = <NoCard loading={this.state.loading} dirty={this.state.dirty} />;
    } else {
      cards = this.state.notelist.map((note) => (
        <div className="sub-md" onClick={() => this.toggle(note.code)}>
          <span>
            {note.subject}
            <br />
          </span>
        </div>
      ));
    }

    return (
      <>
        <h2 className="head margin-full">Subjects</h2>
        <form className="margin-full">
          <select
            className="choice"
            name="semester"
            onChange={this.handleChange}
          >
            <option selected disabled>
              Choose your Semester
            </option>
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
            <option value="4">Fourth</option>
            <option value="5">Fifth</option>
            <option value="6">Sixth</option>
          </select>
          <select className="choice" name="branch" onChange={this.handleChange}>
            <option selected disabled>
              Choose your stream
            </option>
            <option value="CS">CS</option>
            <option value="CE">CE</option>
            <option value="EC">EC</option>
            <option value="EE">EE</option>
            <option value="IT">IT</option>
          </select>
        </form>
        <div className="item-tray margin-full">{cards}</div>
        <Dialog open={this.state.open}>
          <div className="note-md">
	    <h3 className="note-title">{this.state.links[0]?this.state.links[0].subject:""}</h3>
		<div className="scroll">
            {this.state.links.map((link) => {
		return (
			<div className="note">
				<h2>{link.topic}</h2>
				<div>{link.contents}</div>
			</div>
		);	
		})}
		</div>
            <div className="icon-button close-notes" onClick={() => this.toggle(this.state.selected)}>
		<Icons name="close"></Icons>
            </div>
          </div>
        </Dialog>
      </>
    );
  }
}

export default Subjects;
