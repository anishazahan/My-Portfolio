import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Pages/Home/Home';
import FooterSection from './Components/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
        <FooterSection></FooterSection>
      </Navbar>
   
    </div>
  );
}

export default App;
