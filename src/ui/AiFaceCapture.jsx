import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import '../../src/ui/AiFaceCapture.css';

function AiFaceCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // यहाँ CDN कोड पेस्ट हो रहा है
  useEffect(() => {
    const loadModelsAndStartVideo = async () => {
      setIsLoading(true);
      console.log('Loading models from CDN...');
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'),
          faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'),
          faceapi.nets.faceExpressionNet.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'),
        ]);
        console.log('All models loaded from CDN');
        startVideo();
      } catch (error) {
        console.error('Error loading models from CDN:', error);
      }
      setIsLoading(false);
    };
    loadModelsAndStartVideo();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error('Error accessing webcam:', err));
  };

  const handleVideoPlay = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

      if (detections.length > 0) {
        const landmarks = detections[0].landmarks;      
        const expressions = detections[0].expressions;
        generatePrediction(landmarks, expressions);
      }
    }, 1000);
  };

  const generatePrediction = (landmarks, expressions) => {
    const eyeDistance = landmarks.getLeftEye()[0]._x - landmarks.getRightEye()[0]._x;
    const mouthWidth = landmarks.getMouth()[6]._x - landmarks.getMouth()[0]._x;
    const dominantExpression = Object.keys(expressions).reduce((a, b) =>
      expressions[a] > expressions[b] ? a : b
    );

    let futurePrediction = '';
  if (eyeDistance > 100 && mouthWidth > 50) {
    futurePrediction = 'आप भविष्य में बहुत मेहनती और सफल होंगे!';
  } else {
    switch (dominantExpression) {
      case 'happy':
        futurePrediction = 'आपका भविष्य खुशियों से भरा होगा!';
        break;
      case 'sad':
        futurePrediction = 'आपको थोड़ी चुनौतियों का सामना करना पड़ सकता है, लेकिन हिम्मत न हारें!';
        break;
      case 'angry':
        futurePrediction = 'आप भविष्य में अपने गुस्से को काबू करना सीखेंगे!';
        break;
      case 'surprised':
        futurePrediction = 'आपके भविष्य में कई आश्चर्यजनक मौके आएंगे!';
        break;
      case 'disgusted':
        futurePrediction = 'आपको भविष्य में कुछ चीजों से बचना होगा!';
        break;
      case 'fearful':
        futurePrediction = 'आप भविष्य में साहस के साथ आगे बढ़ेंगे!';
        break;
      case 'neutral':
        futurePrediction = '"आपका भविष्य संतुलित और शांतिपूर्ण होगा! टेंशन मत लो, जॉब जल्दी लग जाएगी और आपकी मेहनत का फल आपको जरूर मिलेगा। जीवन में सुख और स्थिरता आपके साथ रहेंगे।"';
        break;
      default:
        futurePrediction = 'आपका भविष्य रहस्यमयी और रोमांचक होगा!';
    }
  }
  setPrediction(futurePrediction);
  };

  return (
    <div className="App">
      <h1> Welcome to FaceScope</h1>
      
      <h2>फेस रीडिंग से भविष्यवाणी</h2>
      {isLoading ? (
        <p>मॉडल्स लोड हो रहे हैं...</p>
      ) : (
        <>
          <div className="video-container">
            <video
              ref={videoRef}
              width="720"
              height="560"
              autoPlay
              onPlay={handleVideoPlay}
            />
            <canvas ref={canvasRef} className="canvas" />
          </div>
          {prediction && (
            <div className="prediction">
              <h2>आपका भविष्य:</h2>
              <p>{prediction}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AiFaceCapture;