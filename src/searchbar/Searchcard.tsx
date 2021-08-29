import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "../articles/article.css";
import "../search/search.css"
import Icons from "../icons/icons";

class SearchInput extends React.Component<RouteComponentProps, {open: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {
    	open : false 
    }
    this.printval = this.printval.bind(this);
    this.inpref = React.createRef();
  }

  inpref: any;

  printval(event: any) {
    event.preventDefault();
    this.props.history.push("/search", this.inpref.current.value);
    this.inpref.current.value = "";
  }

  render() {
    return (
      <>
        <form onSubmit={this.printval} className={"rem-form ".concat(this.state.open?"active-search":"")}>
	  <div className="search-button " onClick={() => {this.setState({open : true});this.inpref.current.focus()}}><Icons name="search"/></div>
          <input
            className={"search ".concat(this.state.open?"active-input":"")}
            name="search"
            ref={this.inpref}
            type="text"
            placeholder="search subject,topics..."
            id="myInput"
	    onBlur={(e) => {this.setState({open : false});e.target.value = ""}}
          />
	<div className="close-search"><Icons name="close"/></div>
        </form>
      </>
    );
  }
}

const Searchcard = withRouter<RouteComponentProps,
  React.ComponentType<RouteComponentProps>
>(SearchInput);
export default Searchcard;
