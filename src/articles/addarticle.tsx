import React, {Fragment} from "react";
import Icons from "../icons/icons";
import { RouteComponentProps, withRouter } from "react-router-dom";
import './article.css';
import {Transition, Dialog} from "@headlessui/react";

interface Request {
  title: string;
  article: Object[];
  author: string;
  caption: string;
  likes: number;
  date: string;
}

interface State {
  position: { x: number; y: number };
  author: string;
  caption: string;
  current: any;
  delete: string;
  loading: boolean;
  menu: string;
  open: boolean;
  published: boolean;
}

class Article extends React.Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: { x: -100, y: -100 },
      author: "",
      caption: "",
      current: "",
      delete: "none",
      menu: "none",
      loading: false,
      open: false,
      published: false,
    };
    this.confirmation = this.confirmation.bind(this);
    this.confirm = this.confirm.bind(this);
    this.focusGain = this.focusGain.bind(this);
    this.addpara = this.addpara.bind(this);
    this.focusLost = this.focusLost.bind(this);
    this.handlekeydown = this.handlekeydown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.publish = this.publish.bind(this);
    this.URL = "https://sristspace.herokuapp.com";
  }

  URL: any;

  addpara() {
    let p = document.createElement("p");
    p.onblur = (ev) => {
      this.focusLost(ev);
    };
    p.onfocus = (ev) => {
      this.focusGain(ev);
    };
    p.contentEditable = "true";
    p.className = "text-lg mt-4 placeholder:text-gray-200 outline-none focus:outline-none";
    p.setAttribute("placeholder", "The content goes here");
    return p;
  }

  componentDidUpdate() {
    if (this.state.published == true) {
      setTimeout(() => {
        this.props.history.push("/articles");
      }, 3000);
    }
  }

  handlekeydown(event: any) {
    if (event.keyCode === 8) {
      let parentele = event.target.parentNode;
      if (
        event.target.nodeName === "IMG" &&
        event.target.parentNode.children.length === 1
      ) {
        let p = this.addpara();
        event.target.parentNode.insertBefore(p, event.target.nextSibling);
        event.target.outerHTML = "";
        p.focus();
      } else if (
        event.target.parentNode.children.length > 1 &&
        (event.target.innerHTML === "<br>" ||
          event.target.innerHTML === "" /*||
          event.target.children[0].innerHTML === "<br>"*/)
      ) {
        let index = [...parentele.children].indexOf(event.target);
        parentele.children[index > 0 ? index - 1 : index].focus();
        event.target.outerHTML = "";
      }
    } else if (event.keyCode == 13 && event.shiftKey) {
      event.preventDefault();
      let p = this.addpara();
      event.target.parentNode.insertBefore(p, event.target.nextSibling);
      p.focus();
    }
  }

  publish() {
    this.setState({ loading: true });
    let resobj: Request = {
      title: "",
      article: [],
      author: "",
      caption: "",
      likes: 0,
      date: Date().toString().slice(4, 15),
    };
    resobj.title = document.getElementById("heading")?.innerHTML as string;
    let article = document.getElementById("content")?.children;
    if (article) {
      for (let i = 0; i < article.length; i++) {
        if (article[i].nodeName == "P")
          resobj.article.push({ text: article[i].innerHTML });
        else resobj.article.push({ image: article[i].getAttribute("src") });
      }
    }
    resobj.author = this.state.author;
    resobj.caption = this.state.caption;
    resobj.likes = 0;
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resobj),
    };
    fetch(this.URL + "/uploadArticles", options)
      .then((response) => response.json())
      .then(() => {
        this.setState({ loading: false, published: true });
      });
  }

  confirm() {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    document
      .getElementById("content")
      ?.addEventListener("keydown", this.handlekeydown);
    this.setState({ current: document.getElementById("content")?.children[0] });
  }

  focusLost(event: any) {
    if (
      event.target.innerHTML === "<br>" &&
      event.target.parentNode.children.length > 2
    )
      event.target.innerHTML = "";
    this.setState({ menu: "none" });
  }

  focusGain(event: any) {
    let rect = event.target.getBoundingClientRect();
    this.setState({
      position: { x: rect.x - 48, y: rect.y - 4 },
      current: event.target,
      delete: "none",
      menu: "initial",
    });
  }

  handleChange(event: any) {
    console.log("image added")
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (ev: any) => {
        var art = document.getElementById("content");
        if (art) {
          var img = document.createElement("img");
          img.className = "rounded-md m-1 focus:border-2 focus:border-solid w-full";
          img.src = ev.target.result;
          img.tabIndex = 0;
          img.onfocus = (ev) => {
            let node = ev.target as HTMLElement;
            let rect = node.getBoundingClientRect();
            this.setState({
              position: { x: rect.x - 48, y: rect.y - 4 },
              current: node,
              delete: "flex",
            });
          };
          art.insertBefore(img, this.state.current.nextSibling);
          img.focus();
        }
      };
      reader.readAsDataURL(event.target.files[0]);
      let menu = document.getElementById("float-menu") as HTMLInputElement;
      menu.checked = false;
    }
  }

  confirmation() {
    return (
      <>
			<div className="flex flex-col gap-y-4">
        <input
          className="p-2 border rounded-lg focus:outline-lime-500"
          type="text"
          placeholder="author name"
          onChange={(e) => {
            this.setState({ author: e.target.value });
          }}
        />
        <textarea
          className="p-2 border rounded-lg resize-none focus:outline-lime-500"
          placeholder="add a caption"
          onChange={(e) => {
            this.setState({ caption: e.target.value });
          }}
        />
				</div>
        <div className="flex gap-x-4">
          <button onClick={this.publish} className="px-5 py-2 mt-6 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg">Publish!</button>
          <button
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
            className="px-5 py-2 mt-6 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg"
          >
            Cancel
          </button>
        </div>
      </>
    );
  }

  render() {
    let box: any;
    if (this.state.loading === false && this.state.published === false)
      box = <this.confirmation />;
    else if (this.state.loading === true && this.state.published === false) {
      box = (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else {
      box = <>Your Article is Published</>;
    }
    return (
      <>
        <div className="hidden sm:flex justify-end w-full">
          <button className="px-5 py-2 mt-6 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg" onClick={this.confirm}>Publish article</button>
        </div>
        <div className="max-w-3xl mt-6 sm:mt-4 mx-auto">
          <p
            contentEditable
            placeholder="Title goes here.."
            id="heading"
            className="text-3xl sm:text-4xl mt-4 placeholder:text-gray-200 font-medium outline-none focus:outline-none"
            onBlur={(e) => {
              if (e.target.innerHTML === "<br>") e.target.innerHTML = "";
            }}
          ></p>
          <article id="content" className="sm:mt-6">
            <p
              contentEditable
              placeholder={"The content goes here"}
              onBlur={this.focusLost}
              className="text-lg placeholder:text-gray-200 outline-none focus:outline-none mt-4"
              onFocus={this.focusGain}
            ></p>
          </article>
        </div>
        <button className="fixed bottom-4 right-4 shadow-lg sm:hidden p-4 rounded-full bg-lime-500 hover:bg-lime-600" onClick={this.confirm}>
          <Icons name="publish"></Icons>
        </button>
        <button
          style={{ display: this.state.delete }}
          className="icon-button delete"
          onClick={() => {
            if (this.state.current.parentNode.children.length === 1) {
              let p = this.addpara();
              this.state.current.parentNode.insertBefore(
                p,
                this.state.current.nextSibling
              );
              this.state.current.outerHTML = "";
              p.focus();
            } else {
              let index = [...this.state.current.parentNode.children].indexOf(
                this.state.current
              );
              this.state.current.parentNode.children[index - 1].focus();
              this.state.current.outerHTML = "";
            }
          }}
        >
          <Icons name="delete"></Icons>
        </button>
        <div className="menu-display">
          <div
            className="icon-button floating-menu"
            style={{
              position: "fixed",
              top: this.state.position.y,
              left: this.state.position.x,
            }}
          >
            <input type="checkbox" id="float-menu" className="float-select" />
            <Icons name="add"></Icons>
            <div className="float-container">
              <label className="floating-menu-item" htmlFor="addImage">
                <Icons name="add_image"></Icons>
              </label>
              <input id="addImage" className="hidden" type="file" onChange={this.handleChange}></input>
              <div
                className="floating-menu-item"
                onClick={() => {
                  let art = document.getElementById("content");
                  let p = this.addpara();
                  art?.insertBefore(p, this.state.current.nextSibling);
                  p.focus();
                  let menu = document.getElementById(
                    "float-menu"
                  ) as HTMLInputElement;
                  menu.checked = false;
                }}
              >
                <Icons name="add_para"></Icons>
              </div>
              <div
                className="floating-menu-item"
                onClick={() => {
                  console.log("Bold Text")
                  if (this.state.current.children.length > 0) {
                    let text = this.state.current.children[0].innerHTML;
                    this.state.current.children[0].outerHTML = "";
                    this.state.current.innerHTML = text;
                  } else {
                    this.state.current.innerHTML =
                      "<strong>" + this.state.current.innerHTML + "</strong>";
                  }
                  let menu = document.getElementById(
                    "float-menu"
                  ) as HTMLInputElement;
                  menu.checked = false;
                }}
              >
                <Icons name="text_bold"></Icons>
              </div>
            </div>
          </div>
        </div>
      <Transition appear show={this.state.open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {this.setState({open: !this.state.open})}}
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
              <div className="inline-block w-full max-w-md sm:max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {<div className="card-md confirm">{box}</div>}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      </>
    );
  }
}

const AddArticle = withRouter<
  RouteComponentProps,
  React.ComponentType<RouteComponentProps>
>(Article);
export default AddArticle;
