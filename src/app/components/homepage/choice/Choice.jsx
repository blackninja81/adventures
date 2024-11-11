import React from 'react';
import './choice.scss';
import Image from 'next/image';
import team from '../../../../../public/assets/logos/team.png'
import support from '../../../../../public/assets/logos/support.png'
import expirience from '../../../../../public/assets/logos/adventure.png'
import price from '../../../../../public/assets/logos/money.png'
import memory from '../../../../../public/assets/logos/memory.png'

const Choice = () => {
  return (
    <div className="choice-container">
      <h2>Why Choose Us?</h2>
      <p className="subheading">Discover what sets us apart from the competition.</p>
      
      <div className="grid">
        <div className="grid-item">
          <i className="icon-expert"></i>
          <Image
          src={team}
          alt='team'
          height={100}
          width={100}
          />
          <h3>Expert Team</h3>
          <p>Our team consists of industry leaders with over 10 years of experience.</p>
        </div>
        
        <div className="grid-item">
          <i className="icon-customer"></i>
          <Image
          src={support}
          alt='team'
          height={100}
          width={100}
          />
          <h3>Customer-Centric Approach</h3>
          <p>We prioritize your needs and offer 24/7 support.</p>
        </div>

        <div className="grid-item">
          <i className="icon-tailored"></i>
          <Image
          src={expirience}
          alt='team'
          height={100}
          width={100}
          />
          <h3>Tailored Itineraries</h3>
          <p>We create personalized itineraries based on your preferences, whether you&apos;re seeking adventure or relaxation.</p>
        </div>

        <div className="grid-item">
          <i className="icon-affordable"></i>
          <Image
          src={price}
          height={100}
          alt='team'
          width={100}
          />
          <h3>Affordable Pricing</h3>
          <p>Offering top-notch services at competitive rates.</p>
        </div>

        <div className="grid-item">
          <i className="icon-memories"></i>
          <Image
          src={memory}
          height={100}
          alt='team'
          width={100}
          />
          <h3>Unforgettable Memories</h3>
          <p>We strive to create moments that will stay with you for a lifetime, with unique adventures and experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default Choice;
