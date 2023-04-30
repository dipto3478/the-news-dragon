import moment from "moment/moment";
import React from "react";
import {
  FaRegBookmark,
  FaRegEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, total_view, rating } = news;
  return (
    <div className="mb-5">
      <div className="bg-[#F3F3F3] flex gap-5 p-5 items-center">
        <img className="h-10 rounded-full " src={author?.img} alt="" />
        <div>
          <h5 className="font-bold text-lg">{author?.name}</h5>
          <p>{moment(author?.published_date).format("YYYY-MM-DD")} </p>
        </div>
        <div className="flex gap-2 text-lg ml-auto">
          <FaRegBookmark /> <FaShareAlt />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <img className="h-[300px] w-full" src={image_url} alt="post_banner" />
        <p className="mt-2 font-normal text-base ">
          {details.length < 250 ? details : details.slice(0, 250)}...
          <Link className="font-bold text-lg" to={`/news/${_id}`}>
            Read more
          </Link>
        </p>
      </div>
      <div className="p-5 flex items-center bg-[#F3F3F3] justify-between">
        <div className="flex items-center gap-3">
          <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-red-400" />}
            fullSymbol={<FaStar />}
          ></Rating>
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaRegEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
