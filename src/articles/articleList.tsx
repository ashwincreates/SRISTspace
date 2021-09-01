import "./article.css";
import "../notes/note.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { Article } from "../models/models";
import ReadArticle from "../articles/readarticle";
interface state extends Article {
	cap_image : string;
  _id:object;
}


function ArticleList() {
  let [articles, setarticles] = useState([] as state[]);

  let URL = "https://sristspace.herokuapp.com/fetchArticles/0";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setarticles(data.data);
        }
      });
  }, []);
let history = useHistory();
  return (
    <>
      <div className="head margin-full">
        <div className="section-title">
          <h2>Newly Uploaded Article</h2>
        </div>
        <button className="explore" onClick={() => {history.push("/articles")}}>Explore</button>
      </div>

      <div className="item-tray margin-full">
        {articles.map((item) => (
          <div className="card-md preview"  onClick={() => {
        history.push("/articles/" + item._id); }}>
		<img src={item.cap_image} />
		<div/>
              <h3>{item.title.replace("<br>", "")}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default ArticleList;
