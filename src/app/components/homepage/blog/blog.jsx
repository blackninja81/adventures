"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

// Splide Styles
import "@splidejs/react-splide/css";
import "./blog.scss";

// Image Imports
import image1 from "../../../../../public/assets/images/bali.webp";
import image2 from "../../../../../public/assets/images/beach.webp";
import image3 from "../../../../../public/assets/images/iceland.webp";
import image4 from "../../../../../public/assets/images/kenya.webp";
import image5 from "../../../../../public/assets/images/peru.webp";
import image6 from "../../../../../public/assets/images/tokyo.webp";

const blogPosts = [
  { id: 1, title: "Visit Bali", img: image1 },
  { id: 2, title: "Visit The Beach", img: image2 },
  { id: 3, title: "Visit Iceland", img: image3 },
  { id: 4, title: "Tembea Kenya", img: image4 },
  { id: 5, title: "Visit Peru", img: image5 },
  { id: 6, title: "Visit Tokyo", img: image6 },
];

const Blog = () => {
  return (
    <section className="blog-container">
      <div className="section-header">
        <span>Travel Journal</span>
        <h2>Latest News</h2>
      </div>

      <Splide
        options={{
          width: "100%",
          perPage: 4,
          perMove: 1,
          gap: "2rem",
          arrows: true,
          pagination: true,
          breakpoints: {
            1200: { perPage: 3 },
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {blogPosts.map((post) => (
          <SplideSlide key={post.id}>
            <div className="blog-card">
              <div className="card-image">
                <Image 
                    src={post.img} 
                    alt={post.title} 
                    fill 
                    style={{ objectFit: "cover" }}
                />
              </div>
              <div className="card-content">
                <h3>{post.title}</h3>
                <p>
                  Discover the hidden gems of {post.title}. From local cuisine to breathtaking landscapes, 
                  we explore what makes this destination a must-visit for every traveler.
                </p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Blog;