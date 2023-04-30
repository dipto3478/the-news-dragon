import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;

  return (
    <div>
      <div className="card  bg-base-100 ">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions ">
            <Link className="btn btn-primary" to={`/category/${category_id}`}>
              All categories on this
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
