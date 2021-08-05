import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import "../articles/article.css";

interface Data extends RouteComponentProps {
	text : string;
}

class Search extends React.Component<Data, {}> {
  constructor(props: any) {
    super(props);
    this.printval = this.printval.bind(this);
    this.inpref = React.createRef();
  }

 inpref:any;

  printval(event : any) {
	event.preventDefault();
	console.log(this.inpref.current.value);
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

/*function Searchcard() {
  let textinput : any;
  textinput = React.createRef<HTMLInputElement>();

  function printval(event: any) {
    event.preventDefault();
    console.log(textinput.current.value)
	const history = useHistory();
	history.push("/search");
  }

  return (
    <>
      <form onSubmit={() => useHistory().push("/search")}>
        <input
          className="search"
          type="text"
          ref={textinput}
          placeholder="search subject,topics..."
          id="myInput"
        />
      </form>
    </>
  );
}*/
const Searchcard = withRouter<Data, React.ComponentType<Data>>(Search)
export default Searchcard;
