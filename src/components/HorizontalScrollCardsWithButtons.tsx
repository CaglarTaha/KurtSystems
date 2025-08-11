import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  link?: string;
}

interface HorizontalScrollCardsWithButtonsProps {
  cards: Card[];
  title?: string;
  className?: string;
  showButtons?: boolean;
}

const HorizontalScrollCardsWithButtons: React.FC<HorizontalScrollCardsWithButtonsProps> = ({
  cards,
  title,
  className = '',
  showButtons = true
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          {title}
        </h2>
      )}
      
      <div className="relative group">
        {/* Navigation buttons */}
        {showButtons && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </>
        )}
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {card.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                )}
                
                {card.link && (
                  <a
                    href={card.link}
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-300 rounded-full transition-colors duration-200"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCardsWithButtons;
