import React from 'react';
import Image from 'next/image';
import './destinations.scss';

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
  { id: 1, title: 'Bali', img: bali },
  { id: 2, title: 'Dubai', img: dubai },
  { id: 3, title: 'Egypt', img: egypt },
  { id: 4, title: 'France', img: france },
  { id: 5, title: 'Greece', img: greece },
  { id: 6, title: 'Iceland', img: iceland },
  { id: 7, title: 'Maldives', img: maldives },
  { id: 8, title: 'Peru', img: peru },
  { id: 9, title: 'South Africa', img: sa },
  { id: 10, title: 'Tokyo', img: tokyo },
  { id: 11, title: 'Vatican', img: vatican },
  { id: 12, title: 'kenya', img: kenya },
  { id: 13, title: 'australia', img: australia }
];

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h2>Destinations</h2>
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
  );
};

export default Destinations;
