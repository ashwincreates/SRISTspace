import React from "react";
import "../articles/article.css";
// import Search from './search';
 
class Searchcard extends React.Component<{}, {}>{
  constructor(props:any){
    super(props);
    this.printval=this.printval.bind(this);
    this.inpref=React.createRef();
  }
  inpref:any;
printval(event:any){
  event.preventDefault();
  console.log(this.inpref.current.value); 
}
render(){
 return (
    <>
    <form onSubmit={this.printval}>
      <input
        className="search"
        type="text"
        placeholder="search Subject,topics..."
        id="myInput"
        ref={this.inpref}       
      />
     </form>
    </>
  );
 }
}
export default Searchcard;