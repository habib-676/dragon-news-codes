import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const catId = parseInt(id);

  return <div>categories- {catId}</div>;
};

export default CategoryNews;
