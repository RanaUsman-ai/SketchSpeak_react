import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Measurements from './Components/Measurements';
import Feedback from './Components/Feedback';
import Store from './Components/Store';
import ProductsInfo from './Components/ProductsInfo';
import Footer from './Components/Footer';
import VirtualDom from './Components/VirtualDom';
import Stitching from './Components/Stitching';
import PrototypeDesign from './Components/PrototypeDesign';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar only when logged in */}
      {isLoggedIn && <Navbar />}

      <main>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />} />
              <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} navigate={navigate} />} />
            </>
          ) : (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/virtualdom" element={<VirtualDom />} /> 
              <Route path="/stitching" element={<Stitching />} />
              <Route path="/prototypedesign" element={<PrototypeDesign />} />
              <Route path="/store" element={<Store />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/measurements" element={<Measurements />} />
               <Route path="/products/:id" element={<ProductsInfo />} />
            </>
          )}
        </Routes>
      </main>

      {/* Footer only when logged in */}
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
