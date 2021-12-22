import React from "react";
import {FiX, FiSearch} from 'react-icons/fi';
import { RouteComponentProps, withRouter } from "react-router-dom";
import Icons from "../icons/icons";

class SearchInput extends React.Component<RouteComponentProps,{ open: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
    this.printval = this.printval.bind(this);
    this.inpref = React.createRef();
  }

  inpref: any;

  printval(event: any) {
    event.preventDefault();
		if(this.inpref.current.value != "")
    	this.props.history.push("/search", this.inpref.current.value);
    this.inpref.current.value = "";
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.printval}
          className={`flex items-center gap-x-2 ${this.state.open?"border border-lime-500":"border border-white"} py-2 px-3 rounded-lg`}
        >
          <button
						type="submit"
            className="search-button"
            onClick={() => {
              this.setState({ open: true });
              this.inpref.current.focus();
            }}
          >
						<FiSearch size={18}/>
          </button>
          <input
            className={`focus:outline-none outline-none transition-{width} duration-150 ease-in-out ${this.state.open?"":"w-0"}`}
            name="search"
            ref={this.inpref}
            type="text"
            placeholder="search subject,topics..."
            id="myInput"
            onBlur={(e) => {
              this.setState({ open: false });
              e.target.value = "";
            }}
          />
        </form>
      </>
    );
  }
}

const Searchcard = withRouter<
  RouteComponentProps,
  React.ComponentType<RouteComponentProps>
>(SearchInput);
export default Searchcard;
