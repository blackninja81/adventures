"use client";
import React from 'react';
import './choice.scss';
import Image from 'next/image';

// Assets
import team from '../../../../../public/assets/logos/team.png';
import support from '../../../../../public/assets/logos/support.png';
import adventure from '../../../../../public/assets/logos/adventure.png';
import money from '../../../../../public/assets/logos/money.png';
import memory from '../../../../../public/assets/logos/memory.png';

const choices = [
  {
    id: 1,
    img: team,
    title: "Expert Team",
    desc: "Our team consists of industry leaders with over 10 years of experience in global travel."
  },
  {
    id: 2,
    img: support,
    title: "24/7 Support",
    desc: "We prioritize your needs and offer around-the-clock support wherever you are."
  },
  {
    id: 3,
    img: adventure,
    title: "Tailored Itineraries",
    desc: "Personalized journeys based on your preferences, from rugged peaks to calm waters."
  },
  {
    id: 4,
    img: money,
    title: "Affordable Pricing",
    desc: "Offering top-notch services and luxury experiences at competitive market rates."
  },
  {
    id: 5,
    img: memory,
    title: "Unique Memories",
    desc: "We strive to create moments that stay with you forever through rare local experiences."
  }
];

const Choice = () => {
  return (
    <section className="choice-container">
      <div className="header-area">
        <h2>Why Choose Us?</h2>
        <p className="subheading">Discover what sets NAI Adventures apart from the rest.</p>
      </div>
      
      <div className="choice-grid">
        {choices.map((item) => (
          <div key={item.id} className="choice-card">
            <div className="icon-box">
              <Image
                src={item.img}
                alt={item.title}
                height={70}
                width={70}
                className="choice-icon"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choice;