import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const Main = () => {
  const [categoryNews ,setCategoryNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("http://localhost:5000/news");
      const data = await res.json();
      setCategoryNews(data);
    }
    fetchNews();
  }, [])

  return (
    <div>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Main;
