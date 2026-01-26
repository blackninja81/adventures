"use client";
import React from "react";
import Image from "next/image";
import "./testimonials.scss";

// Placeholder for user images - replace with your actual asset paths
const Testimonials = () => {
  const testimonials = [
    {
      id: "div1",
      name: "Daniel Clifford",
      status: "Verified Traveler",
      heading: "A journey of a lifetime! I discovered places I'd only dreamed of.",
      text: "I had always wanted to explore the world beyond my comfort zone. Signing up for this experience was the best decision! The team made sure every detail was perfect, from helping me find unique locations to crafting an itinerary tailored to my interests.",
      colorMode: "light-text",
    },
    {
      id: "div2",
      name: "Jonathan Walters",
      status: "Verified Traveler",
      heading: "An adventure tailored to my every need.",
      text: "I had little travel experience, but the support I received was incredible. They patiently guided me through each step of the journey, and I felt completely taken care of.",
      colorMode: "light-text",
    },
    {
      id: "div3",
      name: "Kira Whittle",
      status: "Verified Traveler",
      heading: "Life-changing experiences with fantastic support.",
      text: "I had always dreamed of exploring remote landscapes and connecting with local cultures in ways that were both enriching and immersive. The travel team made that dream a reality. They carefully planned every detail, from the itinerary to the smallest logistics.",
      colorMode: "dark-text",
    },
    {
      id: "div4",
      name: "Jeanette Harmon",
      status: "Verified Traveler",
      heading: "An incredible adventure that exceeded my expectations.",
      text: "This experience was unforgettable! From hidden waterfalls to local culinary adventures, everything was seamlessly organized. I never felt out of place or unprepared.",
      colorMode: "dark-text",
    },
    {
      id: "div5",
      name: "Patrick Abrams",
      status: "Verified Traveler",
      heading: "A travel experience with unmatched personal attention.",
      text: "The staff genuinely cared about my experience, ensuring I felt at home in each destination. Their attention to detail gave me confidence to embrace each part of the journey.",
      colorMode: "light-text",
    },
  ];

  return (
    <section className="testimonials-container">
      <h2>Voices of Adventure</h2>
      <div className="outerdiv">
        <div className="innerdiv">
          {testimonials.map((item) => (
            <div key={item.id} className={`eachdiv ${item.id} ${item.colorMode}`}>
              <div className="userdetails">
                <div className="imgbox">
                  <div className="avatar-placeholder">{item.name.charAt(0)}</div>
                </div>
                <div className="detbox">
                  <p className="name">{item.name}</p>
                  <p className="designation">{item.status}</p>
                </div>
              </div>
              <div className="review">
                <h4>{item.heading}</h4>
                <p>&quot;{item.text}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;