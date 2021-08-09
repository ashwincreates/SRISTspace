import React from "react";
import Icons from "../icons/icons";

interface State {
	title : string;
	content : any;
	isEmptycontent : boolean;
	isEmptytitle : boolean;
}

class AddArticle extends React.Component<{}, State>{
	constructor(props : any){
		super(props);
		this.state = {
			title : "Your Title Here...",
			content : "Type body here...",
			isEmptycontent : true,
			isEmptytitle : true,
		}
		this.focusLost = this.focusLost.bind(this)
		this.toggletitle = this.toggletitle.bind(this)
		this.togglecontent = this.togglecontent.bind(this)
	}

	componentDidUpdate(){
		const heading = document.getElementById("heading");
		const content = document.getElementById("content");
		if(heading?.innerHTML === "<br>" || heading?.innerHTML === "")
		{
			heading?.focus();
		}

		if(content?.innerHTML === "<br>" || content?.innerHTML === "") {
			content?.focus();
		}
	}
	
	printArticle(){
		const heading = document.getElementById("heading")?.innerHTML;
		const content = document.getElementById("content")?.innerHTML;
		console.log(`${heading}\n${content}`);
	}

	focusLost() {
		const heading = document.getElementById("heading");
		const content = document.getElementById("content");
		if(heading?.innerHTML === "<br>" || heading?.innerHTML === "")
		{
			this.setState({isEmptytitle : true})
		}

		if(content?.innerHTML === "<br>" || content?.innerHTML === "") {
			this.setState({isEmptycontent : true})
		}
	}
	
	toggletitle(){
		this.setState({isEmptytitle : false})
	}

	togglecontent(){
		this.setState({isEmptycontent: false})
	}

	render() {
		
		return (
			<>
				<div className="menu">
				<button onClick={() => this.printArticle()}>Publish article</button>
				</div>
				<div className="container">
			 	{this.state.isEmptytitle?<p className="no-text-title" onClick={this.toggletitle}>Your Title here...</p>:<p contentEditable id="heading" className="article-heading" onBlur={() => this.focusLost()}></p>}
			 	{this.state.isEmptycontent?<p className="no-text-content" onClick={this.togglecontent}>Type content here...</p>:<p contentEditable id="content" onBlur={this.focusLost} className="article-content"></p>}
				</div>
				<button className="icon-button explore publish"><Icons name="publish"></Icons></button>
			</>
		)
	}	
}

export default AddArticle;
