import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {Article} from "../models/models";

function Explore() {

let [articleList, setArticleList] = useState<Article[]>([]);

let URL = "http://127.0.0.1:5000";
useEffect(() => {
	fetch(URL + '/fetchArticles').then(res => res.json()).then(data => {setArticleList(data.data)})	
}, [])

let history = useHistory();

let card = articleList.map((item : any) => <div className="card-md" onClick={() => {history.push("/articles/" + item._id)}}><h3>{item.title.replace('<br>', '')}</h3><span>this is a article</span></div>)

  return (
    <>
      <div className="header">
        <h3 className="title-text"> Article </h3>
        <p>Articles written by everyone. Write your own too</p>
        <button className="explore" onClick={() => {history.push(`articles/addarticle`)}}>Write a article</button>
      </div>
      <div className="head">
        <div className="section-title">
          <h2>Top Trending Article</h2>
        </div>
      </div>
      <div className="item-tray">
	{card}
      </div>
      <div className="head">
        <div className="section-title">
          <h2>Explore articles</h2>
        </div>
      </div>
      <div className="flex">
        <div className="section">
          <div className="card-lg">
            <div>
              <h3>Card 1</h3>
              <span>
                Some text
                <br />
              </span>
            </div>
          </div>
        </div>
        <div className="chip-tray">Sort by</div>
      </div>
    </>
  );
}

export default Explore;
