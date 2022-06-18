import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Pages/Home/Home';
import FooterSection from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Projects from './Components/Pages/Projects/Projects';
import Services from './Components/Pages/Services/Services';
import Contact from './Components/Pages/Contact/Contact';
import Blogs from './Components/Pages/Blogs/Blogs';
import ProjectsDetails from './Components/Pages/Projects/ProjectsDetails';

function App() {
  return (
    <div>
        <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/projects" element={<Projects></Projects>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/blogs" element={<Blogs></Blogs>} />
          <Route path="/projects/:projectID" element={<ProjectsDetails></ProjectsDetails>} />
          <Route path="/contact" element={<Contact></Contact>} />
         
          
        </Routes>
        <FooterSection></FooterSection>
      </Navbar>
   
    </div>
  );
}

export default App;
