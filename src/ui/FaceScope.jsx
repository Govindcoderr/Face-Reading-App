
import AiFaceCapture from './AiFaceCapture';
// import './FaceScope.css';
import { useNavigate } from 'react-router-dom';


const FaceScope = () => {

  const navigate = useNavigate();


  return (
    <>
      <div className="min-h-screen w-full bg-blue-600 to-purple-700 text-white">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-2">
            <img src="./logo.jpg" alt="Logo" className="h-20 w-20 rounded-full" />
            <span className="text-2xl font-bold">FaceScope</span>
          </div>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Info</a></li>
            <li><a href="#" className="hover:underline">feature</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock the Secrets of Your Face</h1>
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              Welcome to <span className="font-semibold text-white-400">FaceScope</span>, where the art of face reading meets cutting-edge technology.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              onClick={() => navigate("/aifacecapture")}>
              Your Face, Your Story
            </button>
          </div>
          <div className="md:w-1/3">
            <img src="./portrait-man-face-scann.jpg" alt="Face illustration" className="w-full max-w-md mx-auto rounded-full shadow-lg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default FaceScope;
