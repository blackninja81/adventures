"use client";
// Default theme
import image1 from "../../../../../public/assets/images/bali.webp";
import image2 from "../../../../../public/assets/images/beach.webp";
import image3 from "../../../../../public/assets/images/iceland.webp";
import image4 from "../../../../../public/assets/images/kenya.webp";
import image5 from "../../../../../public/assets/images/peru.webp";
import image6 from "../../../../../public/assets/images/tokyo.webp";
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import "./blog.scss";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Latest News</h2>
      <Splide
        options={{
          width: "100%",
          perPage: 4,
          perMove: 1,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide className="splide-slide">
          <Image src={image1} height={540} width={540} alt="Image 1" />
          <h3>
            <b>Visit Bali</b>
          </h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            temporibus doloremque iure itaque odio possimus corrupti commodi
            minima et fugiat totam, vel facere dicta ducimus impedit est
            quisquam nostrum? Recusandae non ducimus consequuntur inventore?
            Facere doloremque perspiciatis eum debitis dolore, sunt natus fuga,
            sit necessitatibus earum a quidem sequi ut?
          </h4>
          <button>Read More...</button>
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <Image src={image2} height={540} width={540} alt="Image 1" />
          <h3>
            <b>Visit The Beach</b>
          </h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            temporibus doloremque iure itaque odio possimus corrupti commodi
            minima et fugiat totam, vel facere dicta ducimus impedit est
            quisquam nostrum? Recusandae non ducimus consequuntur inventore?
            Facere doloremque perspiciatis eum debitis dolore, sunt natus fuga,
            sit necessitatibus earum a quidem sequi ut?
          </h4>
          <button>Read More...</button>
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <Image src={image3} height={540} width={540} alt="Image 1" />
          <h3>
            <b>Visit Iceland</b>
          </h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            temporibus doloremque iure itaque odio possimus corrupti commodi
            minima et fugiat totam, vel facere dicta ducimus impedit est
            quisquam nostrum? Recusandae non ducimus consequuntur inventore?
            Facere doloremque perspiciatis eum debitis dolore, sunt natus fuga,
            sit necessitatibus earum a quidem sequi ut?
          </h4>
          <button>Read More...</button>
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <Image src={image4} height={540} width={540} alt="Image 1" />
          <h3>
            <b>Tembea Kenya</b>
          </h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            temporibus doloremque iure itaque odio possimus corrupti commodi
            minima et fugiat totam, vel facere dicta ducimus impedit est
            quisquam nostrum? Recusandae non ducimus consequuntur inventore?
            Facere doloremque perspiciatis eum debitis dolore, sunt natus fuga,
            sit necessitatibus earum a quidem sequi ut?
          </h4>
          <button>Read More...</button>
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <Image src={image5} height={540} width={540} alt="Image 1" />
          <h3>
            <b>Visit Peru</b>
          </h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            temporibus doloremque iure itaque odio possimus corrupti commodi
            minima et fugiat totam, vel facere dicta ducimus impedit est
            quisquam nostrum? Recusandae non ducimus consequuntur inventore?
            Facere doloremque perspiciatis eum debitis dolore, sunt natus fuga,
            sit necessitatibus earum a quidem sequi ut?
          </h4>
          <button>Read More...</button>
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <Image src={image6} height={540} width={540} alt="Image 1" />
          <h3>
            <b>Visit Tokyo</b>
          </h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            temporibus doloremque iure itaque odio possimus corrupti commodi
            minima et fugiat totam, vel facere dicta ducimus impedit est
            quisquam nostrum? Recusandae non ducimus consequuntur inventore?
            Facere doloremque perspiciatis eum debitis dolore, sunt natus fuga,
            sit necessitatibus earum a quidem sequi ut?
          </h4>
          <button>Read More...</button>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Blog;
