import React from 'react'
import './categories.scss'
import Image from 'next/image'

import tropical from '../../../../../public/assets/images/tropical.webp';
import machu from '../../../../../public/assets/images/machu-pichu.webp';
import urban from '../../../../../public/assets/images/urban.webp';
import nature from '../../../../../public/assets/images/nature.webp';
import romance from '../../../../../public/assets/images/romance.webp';

const destinationsData = [
  { id: 1, title: 'Tropical Escapes', img: tropical },
  { id: 2, title: 'Historical Wonders', img: machu },
  { id: 3, title: 'Urban Exploration', img: urban },
  { id: 4, title: 'Natural Wonders', img: nature },
  { id: 5, title: 'Romantic Getaways', img: romance },
];
const Categories = () => {
  return (
    <div className='categories-container'>
        <h2>Popular Categories</h2>
        <div className="grid">
        {destinationsData.map((destination) => (
          <div key={destination.id} className="grid-item">
            <div className="image-wrapper">
              <Image src={destination.img} alt={destination.title} layout="fill" objectFit="cover" />
            </div>
            <div className="overlay">
              <h3 className='overlay-text'>{destination.title}</h3>
            </div>
          </div>
        ))}
      </div>
        </div>
  )
}

export default Categories