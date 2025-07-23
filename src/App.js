
import AiFaceCapture from './ui/AiFaceCapture'
import FaceScope from './ui/FaceScope'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<FaceScope/>} />
        <Route path="/aifacecapture" element={<AiFaceCapture/>} />
      </Routes>
    
  );
}

export default App