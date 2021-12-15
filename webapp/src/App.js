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
import Trends from './components/Trends';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/find-your-language" element={<Home/>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
        <Route exact path="/Trends" element={<Trends/>}></Route>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
