"use client";
import React from 'react';
import './categories.scss';
import Image from 'next/image';

// Image Imports
import tropical from '../../../../../public/assets/images/tropical.webp';
import machu from '../../../../../public/assets/images/machu-pichu.webp';
import urban from '../../../../../public/assets/images/urban.webp';
import nature from '../../../../../public/assets/images/nature.webp';
import romance from '../../../../../public/assets/images/romance.webp';

const categoriesData = [
  { id: 1, title: 'Tropical Escapes', img: tropical },
  { id: 2, title: 'Historical Wonders', img: machu },
  { id: 3, title: 'Urban Exploration', img: urban },
  { id: 4, title: 'Natural Wonders', img: nature },
  { id: 5, title: 'Romantic Getaways', img: romance },
];

const Categories = () => {
  return (
    <section className='categories-container'>
      <h2>Popular Categories</h2>
      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="image-holder">
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="cat-img"
              />
            </div>
            <div className="category-overlay">
              <div className="title-wrapper">
                <h3>{cat.title}</h3>
                <div className="accent-line"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;