import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredData);
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredData);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold">Total -{categoryNews.length} news found</h2>
      <div className="newses grid grid-cols-1 gap-3">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
