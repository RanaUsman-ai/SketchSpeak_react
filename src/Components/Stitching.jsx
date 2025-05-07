import React from 'react';
import './Stitching.css';

const stitchingTypes = [
  { id: 1, title: 'Old Antique Stitching', description: 'Perfect for daily wear with comfortable fitting.', image: require('./images/134.jpeg') },
  { id: 2, title: 'Wedding dress', description: 'Get a designer look with intricate patterns.', image: require('./images/1233.avif') },
  { id: 3, title: 'Cultural Design', description: 'Elegant stitching for your special day.', image: require('./images/1111.jpg') },
  { id: 4, title: 'Party Wear', description: 'Stylish and trendy stitching for parties.', image: require('./images/2123.jpg') },
  { id: 5, title: 'Formal Stitching', description: 'Professional and classy stitching for work.', image: require('./images/1212.jpg') },
  { id: 6, title: 'Kids Wear', description: 'Comfortable stitching tailored for kids.', image: require('./images/45.jpeg') },
];

const StitchingTypes = () => {
  return (
    <div>
      {/* ✅ Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Antique Design of Stitching</h1>
          <p>We deal it with pride and passion to bring elegance in every stitch.</p>
        </div>
      </div>

      {/* ✅ Stitching Types Grid */}
      <div className="stitching-container">
        <h1 className="stitching-title">Our Stitching Types</h1>
        <div className="stitching-grid">
          {stitchingTypes.map(type => (
            <div key={type.id} className="stitching-card">
              <img src={type.image} alt={type.title} className="stitching-img" />
              <div className="stitching-content">
                <h2>{type.title}</h2>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StitchingTypes;
