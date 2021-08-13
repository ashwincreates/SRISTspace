import React from "react";
import {RouteComponentProps} from "react-router";
import {Article} from "../models/models";

class ReadArticle extends React.Component<RouteComponentProps, {}>{
	constructor(props : any) {
		super(props);
	}

	componentDidMount() {
		let state = this.props.location.state as Article;
		let heading = document.getElementById("heading");
		let content = document.getElementById("content");
		if(heading){
			heading.innerHTML = state.title			
		}
		for(let i = 0; i < state.article.length; i++)
		{
			if(state.article[i].hasOwnProperty('image')){
				let img = document.createElement('img')	
				let url = state.article[i] as {image : string};
				img.src = url.image;
				img.className = "article-image";
				content?.appendChild(img);
			}
			else{
				let text = document.createElement('p');
				text.className = "article-content";
				let para = state.article[i] as {text : string};
				text.innerHTML = (para.text)?para.text:"";
				content?.appendChild(text);	
			}
		}
	}

	render() {
		return (
			<div className="container">
				<p id="heading" className="article-heading"></p>
				<article id="content">
				</article>
			</div>
		)
	}
}

export default ReadArticle;
