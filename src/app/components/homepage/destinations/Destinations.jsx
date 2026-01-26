"use client";
import React from 'react';
import Image from 'next/image';
import './destinations.scss';

// Import images
import bali from '../../../../../public/assets/images/bali.webp';
import dubai from '../../../../../public/assets/images/dubai.webp';
import egypt from '../../../../../public/assets/images/egypt.webp';
import france from '../../../../../public/assets/images/france.webp';
import greece from '../../../../../public/assets/images/greece.webp';
import iceland from '../../../../../public/assets/images/iceland.webp';
import maldives from '../../../../../public/assets/images/maldives.webp';
import peru from '../../../../../public/assets/images/peru.webp';
import sa from '../../../../../public/assets/images/south-africa.webp';
import tokyo from '../../../../../public/assets/images/tokyo.webp';
import vatican from '../../../../../public/assets/images/vatican.webp';
import kenya from '../../../../../public/assets/images/kenya.webp';
import australia from '../../../../../public/assets/images/australia.webp';

const destinationsData = [
  { id: 1, title: 'Bali', img: bali, size: 'large' },
  { id: 2, title: 'Dubai', img: dubai, size: 'small' },
  { id: 3, title: 'Egypt', img: egypt, size: 'small' },
  { id: 4, title: 'France', img: france, size: 'medium' },
  { id: 5, title: 'Greece', img: greece, size: 'medium' },
  { id: 6, title: 'Iceland', img: iceland, size: 'small' },
  { id: 7, title: 'Maldives', img: maldives, size: 'large' },
  { id: 8, title: 'Peru', img: peru, size: 'small' },
  { id: 9, title: 'South Africa', img: sa, size: 'medium' },
  { id: 10, title: 'Tokyo', img: tokyo, size: 'small' },
  { id: 11, title: 'Vatican', img: vatican, size: 'small' },
  { id: 12, title: 'Kenya', img: kenya, size: 'medium' },
  { id: 13, title: 'Australia', img: australia, size: 'small' }
];

const Destinations = () => {
  return (
    <section className="destinations-container">
      <div className="section-header">
        <span>Explore the Beauty</span>
        <h2>Top Destinations</h2>
      </div>
      
      <div className="destinations-grid">
        {destinationsData.map((dest) => (
          <div key={dest.id} className={`grid-item ${dest.size}`}>
            <Image 
  src={dest.img} 
  alt={dest.title} 
  fill 
  // This tells the browser to download smaller versions for mobile/tablet
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="dest-image"
  loading="lazy" // Ensures images only load when they enter the viewport
  placeholder="blur" // Adds a smooth transition while loading
/>
            <div className="dest-overlay">
              <div className="overlay-content">
                <h3>{dest.title}</h3>
                <span className="view-link">View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;