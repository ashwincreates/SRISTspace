import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Article } from "../models/models";

function Explore() {
  let [articleList, setArticleList] = useState<Article[]>([]);
  let [articles, setArticles] = useState<Article[]>([]);
  let [page, setPage] = useState<number>(0);
  let [loading, setLoading] = useState<boolean>(false);
  let URL = "https://sristspace.herokuapp.com";

  let loadmore = React.useRef<HTMLDivElement>(null);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting && articles.length > 0) {
      setLoading(true);
      fetch(URL + "/fetchArticles/" + page)
        .then((res) => res.json())
        .then((data) => {
          if (data.data.length > 0) {
            setPage(++page);
            setArticles(articles.concat(data.data));
          } else setLoading(false);
        });
    }
  };
  useEffect(() => {
    fetch(URL + "/fetchTrendingArticles")
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data.data);
      });
    fetch(URL + "/fetchArticles/" + page)
      .then((res) => res.json())
      .then((data) => {
        setPage(++page);
        setArticles(data.data);
      });
  }, []);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadmore.current) {
      observer.observe(loadmore.current);
    }
  }, [articles]);

  let history = useHistory();
  let card = articleList.map((item: any, index) => (
    <div
      className="article-md"
      onClick={() => {
        history.push("/articles/" + item._id);
      }}
    >
      <span className="index">
        {(index + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      <div className="article-info">
        <span>{item.author ? item.author : "unknown"}</span>
        <h3 className="article-title">{item.title.replace("<br>", "")}</h3>
        <h1>{item.date as Date}</h1>
      </div>
    </div>
  ));

  let cardskel = [1, 2, 3, 4, 5, 6].map((item: number) => (
    <div className="article-md">
      <span className="index">
        {item.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      <div className="article-info">
        <span className="author-skel"></span>
        <h3 className="title-skel"></h3>
        <h1></h1>
      </div>
    </div>
  ));

  let cardlg = articles.map((item: any) => (
    <div className="article-lg"
      onClick={() => {
        history.push("/articles/" + item._id);
      }}
    >
      <div className="article-info">
        <span>
          {item.author}
          <br />
        </span>
        <h3 className="article-title">{item.title.replace("<br>", "")}</h3>
        <h1>{item.date as Date}</h1>
      </div>
      {item.cap_image ? (
        <img className="cap_img" src={item.cap_image} />
      ) : (
        <div className="cap_img"></div>
      )}
    </div>
  ));

  let cardlgskel = [1, 2, 3, 4, 5].map((item: number) => (
    <div className="article-lg">
      <div className="article-info">
        <span className="author-skel"></span>
        <h3 className="title-skel"></h3>
        <h1></h1>
      </div>
      <div className="cap_img"></div>
    </div>
  ));

  return (
    <>
      <div className="header article-bg">
        <h3 className="title-text"> Article </h3>
        <p>Articles written by everyone. Write your own too</p>
        <button
          className="explore"
          onClick={() => {
            history.push(`articles/addarticle`);
          }}
        >
          Write a article
        </button>
      </div>
      <div className="head margin-full">
        <div className="section-title">
          <h2>Top Trending Article</h2>
        </div>
      </div>
      <div className="item-tray margin-full">
        {articleList.length ? card : cardskel}
      </div>
      <div className="head margin-full">
        <div className="section-title">
          <h2>Explore articles</h2>
        </div>
      </div>
      <div className="flex margin-full">
        <div className="section">
          {articles.length ? cardlg : cardlgskel}
          <div className="loader">{
	    loading?
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>:""}
          </div>
          <div ref={loadmore}></div>
        </div>
      </div>
    </>
  );
}

export default Explore;
