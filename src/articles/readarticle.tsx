import React from "react";
import { RouteComponentProps } from "react-router";
import { Article } from "../models/models";

interface State extends Article {
  liked: boolean;
  caption: "",
}

class ReadArticle extends React.Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      cap_img: "",
      author: "",
      title: "",
      likes: 0,
      article: [],
      liked: false,
      date: "",
      caption: "",
    };
    this.like = this.like.bind(this);
    this.URL = "https://sristspace.herokuapp.com/getArticles/";
    fetch((this.URL + props.match.params.article) as string)
      .then((res) => res.json())
      .then((data) => {
        this.setState(
          {
            author: data.author,
            title: data.title.replace("<br>", ""),
            likes: data.likes,
            article: data.article,
            date: data.date,
            caption: data.caption,
          },
          this.init
        );
      });
  }

  URL: string;

  componentWillUnmount() {
    console.log("Like updated");
  }

  init() {
    let content = document.getElementById("content");
    for (let i = 0; i < this.state.article.length; i++) {
      if (this.state.article[i].hasOwnProperty("image")) {
        let img = document.createElement("img");
        let url = this.state.article[i] as { image: string };
        img.src = url.image;
        img.className = "article-image";
        content?.appendChild(img);
      } else {
        let text = document.createElement("p");
        text.className = "article-content";
        let para = this.state.article[i] as { text: string };
        text.innerHTML = para.text ? para.text : "";
        content?.appendChild(text);
      }
    }
  }

  like() {
    this.setState({ liked: !this.state.liked }, () => {
      if (this.state.liked) {
        this.setState({ likes: this.state.likes + 1 });
      } else {
        this.setState({ likes: this.state.likes - 1 });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <p id="heading" className="article-heading">
          {this.state.title}
        </p>
        <div className="info">
          <div>
            {this.state.author}
            <h1>{this.state.date}</h1>
          </div>
        </div>
	  <div className="article-caption">
		{this.state.caption}
	  </div>
        <article id="content"></article>
      </div>
    );
  }
}

export default ReadArticle;
