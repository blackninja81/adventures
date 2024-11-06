"use client";
import React, { useEffect, useRef } from "react";
import "./landing.scss";
import logo from "../../../../../public/assets/logos/logo21.png"
import Image from "next/image";
import landing from "../../../../../public/assets/images/landing.webp";

const LandingSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    let ticking = false;
    let lastScrollY = window.pageYOffset;

    const updateParallax = () => {
      const scrollY = window.pageYOffset;
      const translateY = scrollY * 0.5;
      parallaxElement.style.transform = `translate3d(0, ${translateY}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="landing-container">
      <div ref={parallaxRef} className="parallax-wrapper">
        <Image
          className="landing-image"
          src={landing}
          alt="landing-page image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="overlay"></div>
      <span className="text">
        <Image src={logo} alt="logo" width={300} height={300} />
        <h1>Nai Adeventures</h1>
        <p>
        Discover the world beyond the ordinary with NAI Adventures. From rugged mountain trails to serene lakeside retreats, we bring you closer to nature’s hidden wonders. Embrace the thrill, explore new horizons, and create memories that last a lifetime. Your next adventure starts here
        </p>
        <span className="landing-button-container">
          <button className="nav-contact-us">Book an Adventure</button>
          <button className="nav-contact-us">Contact Us</button>
        </span>
      </span>
    </div>
  );
};

export default LandingSection;
