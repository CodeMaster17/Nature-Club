
import './App.css'
import Home from './pages/Home/Home'
import './output.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About/About';
import ServicesPage from './pages/Services/Services';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <>
      <Router>
        <main className='w-[100vw] overflow-x-hidden '>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
