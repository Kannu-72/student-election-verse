
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface OrganizationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  bgColor: string;
}

const OrganizationCard = ({ title, description, imageSrc, link, bgColor }: OrganizationCardProps) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <Link to={link} className="block h-full">
        <div 
          className={cn(
            "absolute inset-0 z-10 flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-opacity-80",
            bgColor
          )}
        >
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-white/90">{description}</p>
          <span className="inline-flex items-center text-white/90 font-semibold">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="h-full w-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  );
};

export default OrganizationCard;
