import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  imageUrl: string;
  rating?: number;
  genre?: string[];
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  year,
  imageUrl,
  rating,
  genre = [],
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl || '/placeholder-movie.jpg'}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
        {rating && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-md">
            ⭐ {rating.toFixed(1)}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{year}</p>
        {genre.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {genre.slice(0, 3).map((g) => (
              <span
                key={g}
                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
