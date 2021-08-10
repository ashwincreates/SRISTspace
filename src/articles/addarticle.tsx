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
	

  focusLost() {
    const heading = document.getElementById("heading");
    const content = document.getElementById("content");
    if (heading?.innerHTML === "<br>" || heading?.innerHTML === "") {
      if (heading) heading.innerHTML = "";
    }

    if (
      content?.children[0].innerHTML === "<br>" ||
      content?.children[0].innerHTML === ""
    ) {
      if (content?.children[0]) content.children[0].innerHTML = "";
    }
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
            onBlur={() => this.focusLost()}
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
