import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();
   const contactRef = useRef(null);

    const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <> 
    <nav className="flex items-center justify-between px-8 py-4 sticky top-0 bg-blue shadow z-50">
          <div className="flex items-center space-x-2">
            <img src="./logo.jpg" alt="Logo" className="hidden md:inline h-20 w-20 rounded-full" />
            <span className="hidden md:inline text-2xl font-bold">FaceScope</span>
          </div>
          <ul className="flex space-x-6 font-medium">
            <li><a href="/" className="hover:underline">Home</a></li>
            <Link to="/Infopage" className="hover:underline">Info</Link>
            <li><a href="#" className="hover:underline">feature</a></li>
            <li><a href="/contact" ref={contactRef} onClick={scrollToContact}  className="hover:underline">Contact</a></li>
            <Link to="/Contact"  className="hover:underline">Contact</Link>

            <button className="hidden md:inline bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              onClick={() => navigate("/aifacecapture")}>
              Get Start
            </button>
          </ul>
        </nav>
    
    </>
  )
}
