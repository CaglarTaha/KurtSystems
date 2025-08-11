import React from 'react';

interface Card {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  link?: string;
}

interface HorizontalScrollCardsProps {
  cards: Card[];
  title?: string;
  className?: string;
}

const HorizontalScrollCards: React.FC<HorizontalScrollCardsProps> = ({
  cards,
  title,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          {title}
        </h2>
      )}
      
      <div className="relative">
        {/* Scrollable container */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
