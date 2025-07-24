
import { Contact } from './contact/Contact';
import InfoPage from './info/Info';
import AiFaceCapture from './ui/AiFaceCapture'
import FaceScope from './ui/FaceScope'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<FaceScope/>} />
        <Route path="/aifacecapture" element={<AiFaceCapture/>} />
        <Route path="/Infopage" element={<InfoPage/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    
  );
}

export default App