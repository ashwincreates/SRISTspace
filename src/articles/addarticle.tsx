import React from "react";
import Icons from "../icons/icons";

interface State {
  title: string;
  content: any;
}

class AddArticle extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "Your Title Here...",
      content: "Type body here...",
    };
    this.focusLost = this.focusLost.bind(this);
}

	handlekeydown(event : any){
		switch(event.keyCode){
			case 8 : let parentele = event.target.parentNode;if(event.target.parentNode.children.length > 1 && event.target.innerHTML === "<br>"){event.target.outerHTML = "";parentele.children[parentele.children.length - 1].focus()};break;
			case 13 : let p = document.createElement("p");p.contentEditable="true";p.onblur=this.focusLost;p.className="article-content";p.setAttribute("placeholder", "The content goes here");event.target.parentNode.insertBefore(p, event.target.nextSibling);p.focus();break;
			default : break;
		}
	}
	
	componentDidMount(){
		document.getElementById("content")?.addEventListener("keydown", this.handlekeydown)
	}

  focusLost(event : any) {
	if(event.target.innerHTML === "<br>")event.target.innerHTML="";
	console.log("data cleaned")
  }

  render() {
    return (
      <>
        <div className="menu">
          <button onClick={() => {}}>Publish article</button>
        </div>
        <div className="container">
          <p
            contentEditable
            placeholder="Title goes here.."
            id="heading"
            className="article-heading"
            onBlur={this.focusLost}
          ></p>
          <article id="content">
            <p
              contentEditable
              placeholder={"The content goes here"}
              onBlur={this.focusLost}
              className="article-content"
            ></p>
          </article>
        </div>
        <button className="icon-button explore publish">
          <Icons name="publish"></Icons>
        </button>
      </>
    );
  }
}

export default AddArticle;
