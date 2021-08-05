import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import "../articles/article.css";


class SearchInput extends React.Component<RouteComponentProps, {}> {
  constructor(props: any) {
    super(props);
    this.printval = this.printval.bind(this);
    this.inpref = React.createRef();
  }

 inpref:any;

  printval(event : any) {
	event.preventDefault();
	this.props.history.push("/search",  this.inpref.current.value);
	this.inpref.current.value = "";
  }

  render() {
    return (
      <>
        <form onSubmit={this.printval}>
          <input
            className="search"
		name = "search"
		ref = {this.inpref}
            type="text"
            placeholder="search subject,topics..."
            id="myInput"
          />
        </form>
      </>
    );
  }
}

const Searchcard = withRouter<RouteComponentProps, React.ComponentType<RouteComponentProps>>(SearchInput)
export default Searchcard;

