import dynamic from 'next/dynamic';

// Critical components (Load immediately)
import LandingSection from "./components/homepage/landing/Landing";
import Destinations from "./components/homepage/destinations/Destinations";

// Non-critical components (Load as user scrolls)
const Choice = dynamic(() => import("./components/homepage/choice/Choice"), { ssr: true });
const Categories = dynamic(() => import("./components/homepage/categories/Categories"), { ssr: true });
const Testimonials = dynamic(() => import("./components/homepage/testimonials/Testimonials"), { ssr: true });
const Blog = dynamic(() => import("./components/homepage/blog/blog"), { ssr: true });
const Newsletter = dynamic(() => import("./components/homepage/newsletter/Newsletter"), { ssr: true });

export default function Home() {
  return (
    <>
      <LandingSection />
      <Destinations />
      <Choice />
      <Categories />
      <Testimonials />
      <Blog />
      <Newsletter />
    </>
  );
}