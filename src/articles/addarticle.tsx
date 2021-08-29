import React from "react";
import Dialog from "../dialog/dialog";
import Icons from "../icons/icons";
import { RouteComponentProps, withRouter } from "react-router-dom";

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
    p.className = "article-content";
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
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (ev: any) => {
        var art = document.getElementById("content");
        if (art) {
          var img = document.createElement("img");
          img.className = "article-image";
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
        <input
          className="popdata"
          type="text"
          placeholder="author name"
          onChange={(e) => {
            this.setState({ author: e.target.value });
          }}
        />
        <textarea
          className="popdata"
          placeholder="add a caption"
          onChange={(e) => {
            this.setState({ caption: e.target.value });
          }}
        />
        <div className="flex">
          <button onClick={this.publish}>Publish!</button>
          <button
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
            className="cancel"
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
        <div className="menu">
          <button onClick={this.confirm}>Publish article</button>
          <input
            id="addImage"
            className="hidden"
            type="file"
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          <p
            contentEditable
            placeholder="Title goes here.."
            id="heading"
            className="article-heading"
            onBlur={(e) => {
              if (e.target.innerHTML === "<br>") e.target.innerHTML = "";
            }}
          ></p>
          <article id="content">
            <p
              contentEditable
              placeholder={"The content goes here"}
              onBlur={this.focusLost}
              className="article-content"
              onFocus={this.focusGain}
            ></p>
          </article>
        </div>
        <button className="icon-button explore publish" onClick={this.confirm}>
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
        <Dialog open={this.state.open}>
          {<div className="card-md confirm">{box}</div>}
        </Dialog>
      </>
    );
  }
}

const AddArticle = withRouter<
  RouteComponentProps,
  React.ComponentType<RouteComponentProps>
>(Article);
export default AddArticle;
