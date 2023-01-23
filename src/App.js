import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Background from './Components/Background';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Background/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/proj" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
