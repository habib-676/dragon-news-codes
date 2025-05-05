import React from "react";
import {
  FaStar,
  FaRegStar,
  FaEye,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, tags, rating, total_view } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className=" bg-white rounded-xl shadow-md">
      {/* Bookmark & Share Icons */}
      <div className=" rounded-t-xl p-5 flex items-center justify-between py-2 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className=" flex gap-3 text-gray-500">
          <button title="Bookmark">
            <FaBookmark className="hover:text-orange-500" />
          </button>
          <button title="Share">
            <FaShareAlt className="hover:text-orange-500" />
          </button>
        </div>
      </div>

      <h2 className=" p-5 text-lg font-bold px-4 pb-2">{title}</h2>

      <img
        src={thumbnail_url}
        alt="news thumbnail"
        className="w-full h-52 object-cover"
      />

      <div className="px-4 py-3 text-sm text-gray-700">
        <p>{details.length > 150 ? `${details.slice(0, 150)}...` : details}</p>
        <span className="text-orange-600 font-semibold cursor-pointer">
          Read More
        </span>
      </div>

      <div className="px-4 text-sm text-gray-500">
        <p>
          {formattedDate} | Tag Cloud Tags:
          {tags.map((tag, i) => (
            <span key={i}>
              {tag}
              {i < tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-t text-sm">
        <div className="flex items-center text-orange-500 gap-1">
          {[...Array(5)].map((_, i) =>
            i < rating.number ? (
              <FaStar key={i} size={16} />
            ) : (
              <FaRegStar key={i} size={16} />
            )
          )}
          <span className="ml-1 text-gray-800">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye size={16} />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
