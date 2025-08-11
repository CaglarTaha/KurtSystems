"use client";
import { motion } from "framer-motion";
import HorizontalScrollCards from "@/components/HorizontalScrollCards";
import HorizontalScrollCardsWithButtons from "@/components/HorizontalScrollCardsWithButtons";
import { useLocale } from "@/contexts/LocaleContext";

export default function DemoPage() {
  const { t } = useLocale();

  // Sample data for services
  const servicesCards = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies like React, Next.js, and TypeScript.",
      image: "/globe.svg",
      link: "/services/web-development"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      image: "/globe.svg",
      link: "/services/mobile-apps"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      image: "/globe.svg",
      link: "/services/cloud-solutions"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with modern design principles.",
      image: "/globe.svg",
      link: "/services/ui-ux-design"
    },
    {
      id: 5,
      title: "E-commerce",
      description: "Complete e-commerce solutions with payment integration and inventory management.",
      image: "/globe.svg",
      link: "/services/ecommerce"
    },
    {
      id: 6,
      title: "Consulting",
      description: "Expert technical consulting to help you make the right technology decisions.",
      image: "/globe.svg",
      link: "/services/consulting"
    }
  ];

  // Sample data for projects
  const projectsCards = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/globe.svg",
      link: "/projects/ecommerce-platform"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Cross-platform mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "/globe.svg",
      link: "/projects/banking-app"
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      description: "Advanced analytics dashboard with machine learning capabilities for business intelligence and data visualization.",
      image: "/globe.svg",
      link: "/projects/analytics-dashboard"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Scalable social media platform with real-time messaging, content sharing, and community features.",
      image: "/globe.svg",
      link: "/projects/social-platform"
    }
  ];

  // Sample data for team members
  const teamCards = [
    {
      id: 1,
      title: "Ahmet Yılmaz",
      description: "Senior Full-Stack Developer with 8+ years of experience in React, Node.js, and cloud technologies.",
      image: "/globe.svg",
      link: "/team/ahmet-yilmaz"
    },
    {
      id: 2,
      title: "Fatma Demir",
      description: "UI/UX Designer specializing in user-centered design and creating intuitive digital experiences.",
      image: "/globe.svg",
      link: "/team/fatma-demir"
    },
    {
      id: 3,
      title: "Mehmet Kaya",
      description: "DevOps Engineer with expertise in AWS, Docker, and CI/CD pipeline optimization.",
      image: "/globe.svg",
      link: "/team/mehmet-kaya"
    },
    {
      id: 4,
      title: "Zeynep Özkan",
      description: "Product Manager with a strong background in agile methodologies and product strategy.",
      image: "/globe.svg",
      link: "/team/zeynep-ozkan"
    },
    {
      id: 5,
      title: "Can Arslan",
      description: "Mobile Developer specializing in React Native and native iOS/Android development.",
      image: "/globe.svg",
      link: "/team/can-arslan"
    }
  ];

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(30rem_30rem_at_80%_20%,rgba(16,185,129,0.15),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-20">
        
        {/* Hero Section */}
        <section className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            Horizontal Scroll Cards Demo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            Explore different implementations of horizontally scrollable card components built with Tailwind CSS and React.
          </motion.p>
        </section>

        {/* Basic Horizontal Scroll Cards */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <HorizontalScrollCards
              cards={servicesCards}
              title="Our Services"
              className="mb-12"
            />
          </motion.div>
        </section>

        {/* Horizontal Scroll Cards with Navigation Buttons */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <HorizontalScrollCardsWithButtons
              cards={projectsCards}
              title="Featured Projects"
              className="bg-white/[0.02] p-8 rounded-xl border border-white/10"
            />
          </motion.div>
        </section>

        {/* Team Section with Custom Styling */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <HorizontalScrollCardsWithButtons
              cards={teamCards}
              title="Our Team"
              className="bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 p-8 rounded-xl border border-white/10"
            />
          </motion.div>
        </section>

        {/* Compact Cards Example */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <HorizontalScrollCards
              cards={servicesCards.slice(0, 4)}
              title="Quick Services"
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg"
            />
          </motion.div>
        </section>

        {/* Usage Instructions */}
        <section className="grid gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center"
          >
            How to Use
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 p-6 bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold mb-4">Basic Component</h3>
              <pre className="text-sm opacity-70 overflow-x-auto">
{`import HorizontalScrollCards from '@/components/HorizontalScrollCards';

const cards = [
  {
    id: 1,
    title: "Card Title",
    description: "Card description",
    image: "/image.jpg",
    link: "/link"
  }
];

<HorizontalScrollCards
  cards={cards}
  title="Section Title"
  className="custom-class"
/>`}
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-white/10 p-6 bg-white/[0.02]"
            >
              <h3 className="text-xl font-semibold mb-4">With Navigation Buttons</h3>
              <pre className="text-sm opacity-70 overflow-x-auto">
{`import HorizontalScrollCardsWithButtons from '@/components/HorizontalScrollCardsWithButtons';

<HorizontalScrollCardsWithButtons
  cards={cards}
  title="Section Title"
  showButtons={true}
  className="custom-class"
/>`}
              </pre>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
