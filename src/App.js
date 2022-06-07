import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
      </Navbar>
    
    </div>
  );
}

export default App;
