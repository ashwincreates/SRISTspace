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
      className="flex gap-x-4"
      onClick={() => {
        history.push("/articles/" + item._id);
      }}
    >
      <span className="text-4xl font-bold text-gray-300">
        {(index + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      <div className="">
        <span>{item.author ? item.author : "unknown"}</span>
        <h3 className="text-lg font-bold text-gray-900">{item.title.replace("<br>", "")}</h3>
        <h1 className="mt-2 text-gray-400">{item.date as Date}</h1>
      </div>
    </div>
  ));

  let cardskel = [1, 2, 3, 4, 5, 6].map((item: number) => (
    <div className="flex gap-x-4">
      <span className="text-4xl font-bold text-gray-300">
        {item.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
      <div className="w-1/2">
        <span className="mt-2 rounded-full h-1 bg-gray-400 animate-pulse"></span>
        <h3 className="mt-2 rounded-full h-2 bg-gray-400 animate-pulse"></h3>
        <h1 className="mt-2 rounded-full h-1 bg-gray-400 animate-pulse"></h1>
      </div>
    </div>
  ));

  let cardlg = articles.map((item: any) => (
    <div className="relative flex gap-x-4 cursor-pointer justify-between"
      onClick={() => {
        history.push("/articles/" + item._id);
      }}
    >
      <div className="absolute bottom-4 z-10 sm:z-0 left-4 sm:relative sm:bottom-0 sm:left-0">
        <span className="text-white sm:text-gray-900">
          {item.author}
        </span>
        <h3 className="text-lg font-bold text-white sm:text-gray-900">{item.title.replace("<br>", "")}</h3>
        <h1 className="mt-1 sm:mt-2 text-white sm:text-gray-400">{item.date as Date}</h1>
      </div>
      {item.cap_image ? (
        <div className="h-[150px] sm:h-[100px] w-full sm:w-[200px] overflow-hidden rounded-lg bg-gray-400 sm:after:hidden after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:rounded-b-lg"><img src={item.cap_image} /></div>
      ) : (
        <div className="w-full sm:w-[200px] h-[150px] sm:h-[100px] overflow-hidden rounded-lg bg-gray-400"></div>
      )}
    </div>
  ));

  let cardlgskel = [1, 2, 3, 4, 5].map((item: number) => (
    <div className="relative flex gap-x-4 cursor-pointer justify-between">
      <div className="absolute bottom-4 z-10 sm:z-0 left-4 w-1/2 sm:relative sm:bottom-0 sm:left-0">
        <span className="block h-2 animate-pulse bg-gray-300 rounded-lg"></span>
        <h3 className="mt-2 h-3 animate-pulse bg-gray-300 rounded-lg"></h3>
        <h1 className="mt-4 h-2 animate-pulse bg-gray-300 rounded-lg"></h1>
      </div>
      <div className="w-full sm:w-[200px] h-[150px] sm:h-[100px] overflow-hidden rounded-lg bg-gray-300 animate-pulse"></div>
    </div>
  ));

  return (
    <>
      <div className="w-full h-[200px] flex items-center justify-center flex-col bg-cover bg-center rounded-md mt-4" style={{backgroundImage: "url(https://res.cloudinary.com/sristspace/image/upload/v1630644139/Frame_12_a0bcb2.png)"}}>
        <h3 className="text-xl font-bold"> Article </h3>
        <p>Articles written by everyone. Write your own too</p>
        <button
          className="px-5 py-2 mt-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg"
          onClick={() => {
            history.push(`articles/addarticle`);
          }}
        >
          Write a article
        </button>
      </div>
      <div className="py-6 text-lg font-bold text-gray-900">
          Top Trending Article
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articleList.length ? card : cardskel}
      </div>
      <div className="py-6 text-lg font-bold text-gray-900">
         Explore articles
      </div>
      <div className="flex flex-col dm:w-full md:max-w-3xl gap-y-4">
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
    </>
  );
}

export default Explore;
