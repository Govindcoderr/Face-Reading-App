import React from 'react';

const InfoPage = () => {
  return (
    <div className="bg-gray-400 text-gray-600 min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-400">
          About FaceScope
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300 text-center">
          Welcome to <span className="font-semibold text-white">FaceScope</span> — a fusion of ancient wisdom and modern AI technology. FaceScope analyzes facial features and expressions to deliver insights about personality, emotion, and characteristics using real-time face reading algorithms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-10">✨ Key Features:</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Real-time face detection and analysis</li>
          <li>Emotion recognition using AI models</li>
          <li>Personality insights based on facial traits</li>
          <li>User-friendly interface with camera capture support</li>
          <li>Dark-mode enabled, responsive design</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-white mt-10">🛠️ Technology Stack:</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><span className="text-white">Frontend:</span> React, Tailwind CSS</li>
          <li><span className="text-white">Backend:</span> Node.js / Java (as needed)</li>
          <li><span className="text-white">Face Detection:</span> MediaPipe / face-api.js</li>
          <li><span className="text-white">Hosting:</span> GitHub Pages / Netlify</li>
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
