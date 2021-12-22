import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import Icons from "../../icons/icons";

//state and props for the class
interface State {
  semester: string;
  open: boolean;
  branch: string;
  notelist: { subject: string; code: number }[];
  links: { code: number; contents: string; topic: string; subject: string }[];
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
      <div className="w-full  h-[200px] flex justify-center items-center">
        <div
          className="animate-spin inline-block w-8 h-8 border-4 border-lime-600 rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    if (props.dirty)
      return (
        <div className="w-full flex items-center justify-center text-gray-400">
          Nothing here
        </div>
      );
    else {
      return (
        <div className="w-full h-[200px] flex items-center justify-center text-gray-400">
          <span>Choose Subject and semester</span>
        </div>
      );
    }
  }
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
      console.log("selected subject code is " + code);
      if (this.state.semester && this.state.branch && this.state.selected) {
        fetch(this.URL + "/getlinks/" + this.state.selected)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ links: data.data });
            console.log(data);
          })
          .catch((error) => console.log(error));
      }
    });
  }

  render() {
    let cards: any;
    if (this.state.notelist.length === 0) {
      cards = <NoCard loading={this.state.loading} dirty={this.state.dirty} />;
    } else {
      cards = (
        <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-4">
          {this.state.notelist.map((note) => (
            <div
              className="p-4 shadow-md h-[125px] flex flex-col-reverse border border-gray-100 rounded-lg"
              onClick={() => this.toggle(note.code)}
            >
              <span className="text-xl font-medium">{note.subject}</span>
              <span className="text-gray-400">Subject</span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <>
        <div className="py-6 text-lg font-medium text-gray-900">Subjects</div>
        <form className="w-full flex gap-y-4 md:gap-x-4 md:flex-row flex-col">
          <select
            className="p-3 rounded-lg focus:outline-lime-500"
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
          <select
            className="p-3 rounded-lg focus:outline-lime-500"
            name="branch"
            onChange={this.handleChange}
          >
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
        {cards}
        <Transition appear show={this.state.open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => this.toggle(this.state.selected)}
          >
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md sm:max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 py-2 text-lime-600"
                  >
                    {this.state.links[0] ? this.state.links[0].subject : ""}
                  </Dialog.Title>
                  <div className="mt-2 h-[500px] overflow-y-scroll">
                      {this.state.links.map((link) => {
                        return (
                          <div className="mt-3">
                            <h2 className="font-medium text-gray-900">{link.topic}</h2>
                            <div className="text-gray-500">{link.contents}</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }
}

export default Subjects;
