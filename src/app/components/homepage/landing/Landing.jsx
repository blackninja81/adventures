"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./landing.scss";

// Assets
import logo from "../../../../../public/assets/logos/logo21.png";
import landingImg from "../../../../../public/assets/images/landing.webp";

const LandingSection = () => {
  const parallaxRef = useRef(null); // Removed <HTMLDivElement>

  useEffect(() => {
    let requestRef; // Removed : number
    
    const handleScroll = () => {
      if (parallaxRef.current) {
        // Subtle parallax depth
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
      }
      requestRef = requestAnimationFrame(handleScroll);
    };

    requestRef = requestAnimationFrame(handleScroll);
    
    return () => {
      if (requestRef) {
        cancelAnimationFrame(requestRef);
      }
    };
  }, []);

  return (
    <section className="landing-container">
      <div ref={parallaxRef} className="parallax-wrapper">
        <Image
          src={landingImg}
          alt="NAI Adventures Scenic Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="overlay"></div>

      <div className="content-box">
        <div className="logo-container">
          <Image 
            src={logo} 
            alt="Nai Adventures Logo" 
            width={220} 
            height={220} 
            priority
            className="main-logo"
          />
        </div>
        
        <h1 className="hero-title">Nai Adventures</h1>
        
        <p className="hero-description">
          Discover the world beyond the ordinary with NAI Adventures. From rugged 
          mountain trails to serene lakeside retreats, we bring you closer to 
          nature’s hidden wonders. Embrace the thrill, explore new horizons, 
          and create memories that last a lifetime.
        </p>

        <div className="button-group">
          <button className="btn-outline">Book an Adventure</button>
          <button className="btn-filled">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;