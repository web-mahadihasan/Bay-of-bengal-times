import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaStar, FaStarHalfAlt, FaHeart, FaEye } from 'react-icons/fa';

const NewsCard = ({ news = {} }) => {
    const {_id, title, author, details, image_url, total_view, category_id, rating} = news || {}
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-base-200">
      {/* Header with Author Info */}
      <div className="p-4 flex items-center justify-between space-x-4 bg-base-200">
        <div className='flex items-center gap-4'>
            <img
            src={author?.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
            />
            <div>
                <p className="text-base text-[#403F3F] font-semibold">{author?.name}</p>
                <p className="text-base text-[#706F6F]">{author?.published_date}</p>
            </div>
        </div>
        <div className="ml-auto flex space-x-3 text-gray-400">
          <button>
            <FaBookmark size={20} />
          </button>
          <button>
            <FaShareAlt size={20}/>
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-[#403F3F] p-4">{title}</h2>

      {/* Image */}
      <div className="relative px-4 py-2">
        <img src={image_url} alt="News" className="w-full h-[282px]  rounded-lg" />
      </div>

      {/* Description */}
      <div className="px-4 text-gray-700 text-base">
        <p className="text-[#706F6F] line-clamp-4">{details}</p>
        <Link to={`/news/${_id}`} className="text-blue-500 hover:underline inline-block py-2">
          Read More
        </Link>
      </div>


      {/* Footer with Engagement Metrics */}
      <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center text-yellow-500 space-x-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <span className="ml-1 text-gray-600">{rating?.number}</span>
        </div>
        
        {/* Engagement Metrics */}
        <div className="flex items-center space-x-6 text-gray-500">
          <span className="flex items-center space-x-1">
            <FaEye />
            <span>{total_view}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
