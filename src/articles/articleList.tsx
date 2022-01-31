import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { Article } from "../models/models";

interface state extends Article {
  cap_image: string;
  _id: object;
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
      <div className="flex my-2 justify-between items-center">
        <div className="py-6 text-lg font-bold text-gray-900">
          New Articles
        </div>
        <button
          className="px-5 py-2 bg-lime-500 text-base hover:bg-lime-600 text-white font-medium rounded-lg"
          onClick={() => {
            history.push("/articles");
          }}
        >
          Explore more{" "}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((item) => (
          <div
            className="h-[150px] relative overflow-hidden rounded-lg after:absolute border after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:rounded-b-lg"
            onClick={() => {
              history.push("/articles/" + item._id);
            }}
          >
            <img src={item.cap_image} />
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg z-10" >{item.title.replace("<br>", "")}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticleList;
