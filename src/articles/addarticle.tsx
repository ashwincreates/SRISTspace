import React from "react";
import Dialog from "../dialog/dialog";
import Icons from "../icons/icons";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface Request {
  title: string;
  article: Object[];
}

interface State {
  position: { x: number; y: number };
  current: any;
  delete: string;
  loading: boolean;
  open: boolean;
  published: boolean;
}

class Article extends React.Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: { x: -100, y: -100 },
      current: "",
      delete: "none",
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
      let node = ev.target as HTMLElement;
      let nodep = node.parentNode as HTMLElement;
      if (node.innerHTML === "<br>" && nodep.children.length > 2)
        node.outerHTML = "";
    };
    p.onfocus = (ev) => {
      let node = ev.target as HTMLElement;
      let rect = node.getBoundingClientRect();
      this.setState({
        position: { x: rect.x - 48, y: rect.y - 4 },
        current: node,
        delete: "none",
      });
    };
    p.contentEditable = "true";
    p.className = "article-content";
    p.setAttribute("placeholder", "The content goes here");
    return p;
  }

  componentDidUpdate() {
    if (this.state.published == true) {
      setTimeout(() => {this.props.history.push("/articles")}, 3000);
    }
  }

  handlekeydown(event: any) {
    switch (event.keyCode) {
      case 8:
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
          (event.target.innerHTML === "<br>" || event.target.innerHTML === "")
        ) {
          let index = [...parentele.children].indexOf(event.target);
          parentele.children[index > 0 ? index - 1 : index].focus();
          event.target.outerHTML = "";
        }
        break;
      case 13:
        let p = this.addpara();
        event.target.parentNode.insertBefore(p, event.target.nextSibling);
        p.focus();
        break;
      default:
        break;
    }
  }

  publish() {
    this.setState({ loading: true });
    let resobj: Request = { title: "", article: [] };
    resobj.title = document.getElementById("heading")?.innerHTML as string;
    let article = document.getElementById("content")?.children;
    if (article) {
      for (let i = 0; i < article.length; i++) {
        if (article[i].nodeName == "P")
          resobj.article.push({ text: article[i].innerHTML });
        else resobj.article.push({ image: article[i].getAttribute("src") });
      }
    }
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
      event.target.outerHTML = "";
  }

  focusGain(event: any) {
    let rect = event.target.getBoundingClientRect();
    this.setState({
      position: { x: rect.x - 48, y: rect.y - 4 },
      current: event.target,
      delete: "none",
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
        Are you sure you want to publish?
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

const AddArticle =  withRouter<RouteComponentProps, React.ComponentType<RouteComponentProps>>(Article);
export default AddArticle;
