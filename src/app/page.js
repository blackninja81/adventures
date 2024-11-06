import Image from "next/image";
import Destinations from "./components/homepage/destinations/Destinations";
import LandingSection from "./components/homepage/landing/Landing";

export default function Home() {
  return (
    <div>
      <p>
        <LandingSection/>
        <Destinations/>
      </p>
    </div>
  );
}
