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
    this.handleChange = this.handleChange.bind(this);
  }

  handlekeydown(event: any) {
    switch (event.keyCode) {
      case 8:
        let parentele = event.target.parentNode;
        if (
          event.target.parentNode.children.length > 1 &&
          (event.target.innerHTML === "<br>" ||
		event.target.innerHTML === "")
        ) {
          event.target.outerHTML = "";
          parentele.children[parentele.children.length - 1].focus();
        }
        break;
      case 13:
        let p = document.createElement("p");
        p.contentEditable = "true";
        p.onblur = this.focusLost;
        p.className = "article-content";
        p.setAttribute("placeholder", "The content goes here");
        event.target.parentNode.insertBefore(p, event.target.nextSibling);
        p.focus();
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    document
      .getElementById("content")
      ?.addEventListener("keydown", this.handlekeydown);
  }

  focusLost(event: any) {
    if (event.target.innerHTML === "<br>") event.target.innerHTML = "";
    console.log("data cleaned");
  }

  handleChange(event : any) {
    if(event.target.files && event.target.files[0]){
		let reader = new FileReader();
		reader.onload = function(ev : any){
			var art = document.getElementById("content")
			if(art){
				var img = document.createElement("img");
				img.className = "article-image";
				img.src=ev.target.result;
				img.tabIndex=0;
				art.insertBefore(img, art.children[art.children.length - 1])
			}			
		}.bind(this);
		reader.readAsDataURL(event.target.files[0]);
	}
  }

  render() {
    return (
      <>
        <div className="menu">
          <button onClick={() => {}}>Publish article</button>
          <label className="button explore" htmlFor="addImage">
            Add Image
          </label>
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
	<div className="publish">
        	<button className="icon-button explore">
          		<Icons name="publish"></Icons>
        	</button>
          	<label className="button icon-button explore" htmlFor="addImage">
            		<Icons name="add_image"></Icons>
          	</label>
	</div>
      </>
    );
  }
}

export default AddArticle;
