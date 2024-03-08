
import './App.css'
import Home from './pages/Home/Home'
import './output.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About/About';
import ServicesPage from './pages/Services/Services';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
