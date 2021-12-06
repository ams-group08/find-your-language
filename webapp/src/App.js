import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
