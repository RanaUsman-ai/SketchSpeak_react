import React from 'react'
import img1 from "./images/banner (1).png"
import img2 from "./images/1212.jpg";
import img3 from "./images/banner (4).png"
import img4 from"./images/3.jpg";
import "./Home.css"
import { FaArrowRight } from "react-icons/fa";


const Home = () => {

  return (
    <div style={{}}>
       {/* portion 1 */}
       {/* Left Text */}
       <div className='text-portion1' style={{ width: '40%', marginTop: '150px',marginLeft:"4rem" }}>
          <h1 style={{ fontSize: '60px', fontWeight: 'bold' , marginLeft:"3rem" ,fontFamily:"Copperplate Gothic Bold"  }}>Your Style Is <br/>Our Vision</h1>
          <p style={{ fontSize: '20px', marginTop: '40px' , marginLeft:"3rem"}}>“At our core, we believe that fashion is personal. Every stitch, every design, and every detail is crafted to reflect your unique style. With a commitment to quality and customization, we turn your ideas into reality. Because at the end of the day, your style is our vision.”</p>
          <button style={{
            marginLeft:"3rem",
            marginTop: '60px',
            padding: '10px 20px',
            backgroundColor: '#fbd102',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            Learn More <span style={{
              backgroundColor: '#fff',
              borderRadius: '50%',
              padding: '5px'
            }}>
              <FaArrowRight color="#000" />
            </span>
          </button>
        </div>

      <div>
        <div className='text-portion1' >
        </div>
        <img src={img1} alt='notfound' style={{ top: "0px", right: "0px", position: "absolute", height: "600px" }} />
        <div className="profile-wrapper">
          <img
            src={img2}
            alt="notfound"
            className="profile-img"
          />
        </div>
      </div>
      {/* protion 2 */}
<div style={{  marginTop:"250px",
  marginLeft:"400px",}}>
<hr style={{

  border: "none",
  borderTop: "2px solid #fbd102",
  margin: "60px 0"
}} />
</div>
      <div>
      
       {/* Right Text */}
       <div className='text-portion2' style={{ width: '1000px', marginTop:"200px" }}>
          <h1 style={{ fontSize: '60px', marginTop:"50px" ,fontWeight: 'bold' , marginLeft:"700px", fontFamily:"Copperplate Gothic Bold"}}>Discover Our Collection</h1>
          <p style={{ fontSize: '20px', marginTop: '30px',marginLeft:"700px" }}>“Discover our collection of finely tailored pieces, crafted with precision and passion. Every garment tells a story of craftsmanship, quality, and timeless style. Whether you seek sophistication or bold statements, our collection has something unique for you. Experience fashion redefined.”</p>
          <button style={{
            marginLeft:"700px",
            marginTop: '40px',
            padding: '10px 20px',
            backgroundColor: '#fbd102',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            float: 'right'
          }}>
            Learn More <span style={{
              backgroundColor: '#fff',
              borderRadius: '50%',
              padding: '5px'
            }}>
              <FaArrowRight color="#000" />
            </span>
          </button>
        </div>
        {/* text */}
        <img src={img3} alt='notfound' style={{ top: "800px", left: "0px", position: "absolute", height: "650px" , width:"300px" }} />
        <div className="profile-wrapp">
          <img
            src={img4}
            alt="notfound"
            className="profile-image"
          />
       
        </div>
      </div>
      
      
    </div>

  )
}

export default Home