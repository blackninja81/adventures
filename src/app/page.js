import Image from "next/image";
import Newsletter from "./components/homepage/newsletter/Newsletter";
import Instagram from "./components/homepage/instagram/Instagram";
import Testimonials from "./components/homepage/testimonials/Testimonials";
import Categories from "./components/homepage/categories/Categories";
import Choice from "./components/homepage/choice/Choice";
import Blog from "./components/homepage/blog/blog";
import Destinations from "./components/homepage/destinations/Destinations";
import LandingSection from "./components/homepage/landing/Landing";

export default function Home() {
  return (
    <div>
      <p>
        <LandingSection/>
        <Destinations/>
        <Choice/>
        <Categories/>
        <Testimonials/>
        {/* <Instagram/> */}
        <Blog/>
        <Newsletter/>
      </p>
    </div>
  );
}
