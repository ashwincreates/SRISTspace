import React, { ReactEventHandler } from "react";
import Icons from "../icons/icons";

interface Request {
  title: string;
  article: Object[];
}

interface State {
  position: { x: number; y: number };
  display: string;
  current: any;
}

class AddArticle extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: { x: -100, y: -100 },
      display: "none",
      current: document.getElementById("content")?.children[0],
    };
    this.focusGain = this.focusGain.bind(this);
    this.focusLost = this.focusLost.bind(this);
    this.handlekeydown = this.handlekeydown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.publish = this.publish.bind(this);
    this.URL = "https://sristspace.herokuapp.com";
  }

  URL: any;

  handlekeydown(event: any) {
    switch (event.keyCode) {
      case 8:
        let parentele = event.target.parentNode;
        if (
          event.target.parentNode.children.length > 1 &&
          (event.target.innerHTML === "<br>" || event.target.innerHTML === "")
        ) {
          event.target.outerHTML = "";
          parentele.children[parentele.children.length - 1].focus();
        }
        break;
      case 13:
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
            display: "initial",
            current: node,
          });
        };
        p.contentEditable = "true";
        p.className = "article-content";
        p.setAttribute("placeholder", "The content goes here");
        event.target.parentNode.insertBefore(p, event.target.nextSibling);
        p.focus();
        break;
      default:
        break;
    }
  }

  publish() {
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
      .then((data) => console.log(data));
  }

  componentDidMount() {
    document
      .getElementById("content")
      ?.addEventListener("keydown", this.handlekeydown);
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
      display: "initial",
      current: event.target,
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
            display: "initial",
            current: node,
          });
        };
          art.insertBefore(img, this.state.current.nextSibling);
	img.focus();
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    return (
      <>
        <div className="menu">
          <button onClick={this.publish}>Publish article</button>
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
            onBlur={(e) => {if(e.target.innerHTML === "<br>")e.target.innerHTML = ""}}
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
        <div className="publish">
          <button className="icon-button explore">
            <Icons name="publish"></Icons>
          </button>
        </div>
        <div className="menu-display">
          <div
            className="icon-button floating-menu"
            style={{
              display: this.state.display,
              position: "fixed",
              top: this.state.position.y,
              left: this.state.position.x,
            }}
          >
            <input type="checkbox" className="float-select" />
            <Icons name="add"></Icons>
            <label className="floating-menu-item" htmlFor="addImage">
              <Icons name="add_image"></Icons>
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default AddArticle;
