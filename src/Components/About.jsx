import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "./images/78.avif";
import img2 from "./images/2323.avif";
import img3 from "./images/6.webp";
import img4 from "./images/2121.avif";
import img5 from "./images/d.jpg";
import img6 from "./images/2334.avif";  // left side image
// import img7 from "./images/4556.jpg"; // right side image
import './About.css';

const initialCards = [
  { id: 1, title: 'Our Mission', description: 'We aim to deliver high-quality custom stitching services.', image: img1 },
  { id: 2, title: 'Our Vision', description: 'To be the leading platform for personalized fashion.', image: img2 },
  { id: 3, title: 'Best Stitching', description: 'Customer satisfaction, quality, and innovation.', image: img3 },
  { id: 4, title: 'Our Team', description: 'A team of experienced designers and tailors.', image: img4 },
  { id: 5, title: 'Best Thread', description: 'Always delivering on time with the perfect fit.', image: img5 }
];

const angles = [0, -10, 10, 0, -10];

const AboutCards = () => {
  const [cards, setCards] = useState(initialCards);

  const handleCardDragEnd = (info, id) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      setCards(prevCards => prevCards.filter(card => card.id !== id));
    }
  };

  return (
    <div className="about">
      {/* Left Image */}
      <div className="side-image left">
        <img src={img6} alt="left" />
      </div>

      {/* Right Image */}
      <div className="side-image right">
        {/* <img src={img7} alt="right" /> */}
      </div>

      <div className="about-container">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="about-card"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(event, info) => handleCardDragEnd(info, card.id)}
              initial={{ rotate: angles[index] || 0, scale: 1, y: index * 10 }}
              animate={{ rotate: angles[index] || 0, scale: 1, y: index * 10 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ zIndex: cards.length - index }}
            >
              <img src={card.image} alt={card.title} className="about-card-img" />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutCards;
