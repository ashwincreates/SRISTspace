import React from "react";
import { Note } from "../../models/models";

//state and props for the class
interface State {
  semester: string;
  branch: string;
  notelist: Note[];
  loading: boolean;
  dirty: boolean;
}

interface Props {}

//for testing purpose
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

function Card(props: any) {
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

class Subjects extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      semester: "",
      branch: "",
      notelist: [],
      loading: false,
      dirty: false,
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
    fetch(
      "http://0.0.0.0:"+ process.env.PORT + "/getNotesByDrop/" +
        semester +
        "/" +
        branch
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          notelist: data.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state.notelist);
      });
  }

  render() {
    let cards: any;
    if (this.state.notelist.length === 0) {
      cards = <NoCard loading={this.state.loading} dirty={this.state.dirty} />;
    } else {
      cards = this.state.notelist.map((note) => (
        <Card subject={note.subject} />
      ));
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
        <div className="item-tray">{cards}</div>
      </>
    );
  }
}

export default Subjects;
