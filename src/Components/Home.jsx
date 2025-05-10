import React from 'react';
import img1 from "./images/banner (1).png";
import img2 from "./images/1212.jpg";
import img3 from "./images/banner (4).png";
import img4 from "./images/3.jpg";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">

      {/* Section 1 */}
      <section className="section section-one">
        <div className="text-content">
          <h1>Your Style Is <br />Our Vision</h1>
          <p>“At our core, we believe that fashion is personal. Every stitch, every design, and every detail is crafted to reflect your unique style...”</p>
          <button className="learn-more-btn">
            Learn More
            <span><FaArrowRight color="#000" /></span>
          </button>
        </div>
        <div className="image-content">
          <img src={img1} alt="banner" className="banner-img" />
          <div className="profile-wrapper">
            <img src={img2} alt="profile" className="profile-img" />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Section 2 */}
      <section className="section section-two">
        <div className="image-content">
          <img src={img3} alt="banner2" className="banner-img left-img" />
          <div className="profile-wrapp">
            <img src={img4} alt="profile2" className="profile-image" />
          </div>
        </div>
        <div className="text-content right">
          <h1>Discover Our Collection</h1>
          <p>“Discover our collection of finely tailored pieces, crafted with precision and passion. Every garment tells a story...”</p>
          <button className="learn-more-btn">
            Learn More
            <span><FaArrowRight color="#000" /></span>
          </button>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="section learn-more-final">
        <h2>Learn More About Our Vision</h2>
        <p>We offer a full catalog of fashion excellence, customization, and personal experience. Reach out today and let’s create something remarkable.</p>
        <button className="learn-more-btn">
          Explore More
          <span><FaArrowRight color="#000" /></span>
        </button>
      </section>

    </div>
  );
};

export default Home;
