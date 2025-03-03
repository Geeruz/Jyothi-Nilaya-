import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;