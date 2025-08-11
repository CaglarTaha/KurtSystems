import React from 'react';
import HorizontalScrollCards from './HorizontalScrollCards';

const ExampleHorizontalCards: React.FC = () => {
  // Sample data for demonstration
  const sampleCards = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies like React, Next.js, and TypeScript.",
      image: "/public/globe.svg",
      link: "/services/web-development"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      image: "/public/globe.svg",
      link: "/services/mobile-apps"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      image: "/public/globe.svg",
      link: "/services/cloud-solutions"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with modern design principles.",
      image: "/public/globe.svg",
      link: "/services/ui-ux-design"
    },
    {
      id: 5,
      title: "E-commerce",
      description: "Complete e-commerce solutions with payment integration and inventory management.",
      image: "/public/globe.svg",
      link: "/services/ecommerce"
    },
    {
      id: 6,
      title: "Consulting",
      description: "Expert technical consulting to help you make the right technology decisions.",
      image: "/public/globe.svg",
      link: "/services/consulting"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <HorizontalScrollCards
        cards={sampleCards}
        title="Our Services"
        className="mb-12"
      />
      
      {/* Example with different styling */}
      <HorizontalScrollCards
        cards={sampleCards.slice(0, 3)}
        title="Featured Projects"
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg"
      />
    </div>
  );
};

export default ExampleHorizontalCards;
