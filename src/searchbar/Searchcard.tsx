import { useState } from "react";
import "../articles/article.css";

function Searchcard() {
  const [filter, setFilter] = useState("");

  const searchtext = (event : any) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="search Subject,topics..."
        id="myInput"
        value={filter}
        onChange={searchtext}
      />
    </>
  );
}

export default Searchcard;
