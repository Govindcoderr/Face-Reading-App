
import { useRef } from 'react';
import { Contact } from '../contact/Contact';
import Footer from '../footer/Footer';
import InfoPage from '../info/Info';
import AiFaceCapture from './AiFaceCapture';
// import './FaceScope.css';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';


const FaceScope = () => {

  const navigate = useNavigate();
   const contactRef = useRef(null);
   
  // const scrollToContact = () => {
  //   contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };



  return (
    <>
      <div className="min-h-screen w-full bg-blue-400 to-purple-700 text-white">

        <Navbar/>
      
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock the Secrets of Your Face</h1>
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              Welcome to <span className="font-semibold text-white">FaceScope</span>, where the art of face reading meets cutting-edge technology.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              onClick={() => navigate("/aifacecapture")}>
              Your Face, Your Story
            </button>
          </div>
          <div className="md:w-1/3">
            <img src="./myface.png" alt="Face illustration" className="w-full max-w-md mx-auto rounded-full shadow-lg" />
          </div>
        </section>
      </div>
      <InfoPage/>
        <div ref={contactRef}>
        <Contact />
      </div>
      <Footer /> // footer ---

    </>
  );
};

export default FaceScope;
