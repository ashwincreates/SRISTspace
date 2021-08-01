import React from "react";
import { Note } from "../../models/models";

interface State {
  semester: string;
  branch: string;
  notelist: Note[];
}

interface Props {}

const notes: Note[] = [
  {
    topic: "java",
    link: "link",
    upload: new Date("2021-07-31"),
    subject: "Energy, Environment,Ecology & Society",
    semester: 4,
    stream: "CS",
  },
  {
    topic: "Java ebooks",
    link: "ref-oracle- ebooks",
    upload: new Date("2021-07-31"),
    subject: "Computer Organization and Architecture",
    semester: 4,
    stream: "CS",
  },
];

function Card(props : any) {
	return (
	<div className="card-md">
            <div>
              <h1>Subject</h1>
              <span>
                {props.subject}
                <br />
              </span>
            </div>
          </div>
	)
}

function NoCard(){
	return(
	<div className="nocard">
		<span>Choose Subject and semester</span>
	</div>
	)
}


class Subjects extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      semester: "",
      branch: "",
      notelist: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      } as Pick<State, keyof State>,
      () => {
        console.log(this.state.semester + " " + this.state.branch);
        if (this.state.semester && this.state.branch != "") {
          this.handleSubmit(this.state.semester, this.state.branch);
        }
      }
    );
  }

  handleSubmit(semester : string, branch: string) {
	fetch("http://127.0.0.1:5000/getNotesByDrop/" + semester + "/" + branch)
	.then(res => res.json())
	.then((data) => {
		this.setState({
			notelist: data
		});
	}).catch((error) => console.log(error))
	console.log("http://127.0.0.1:5000/getNotesByDrop/" + semester + "/" + branch)
  }

  render() {

	let cards : any;
	if(this.state.notelist.length === 0){
		cards = <NoCard/>
}
	else{
		cards = this.state.notelist.map((note) => <Card subject={note.subject} />);
	}

    return (
      <>
        <h2 className="head">Subjects</h2>
        <form>
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
        <div className="item-tray">
	{cards}
        </div>
      </>
    );
  }
}

export default Subjects;
