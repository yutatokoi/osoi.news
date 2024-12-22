import React from "react";

interface NewsCardProps {
  title: string;
  summary: string;
  url: string;
  imageUrl?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, summary, url, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full md:w-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{summary}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
