import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
    </Routes>
    </Router >
  );
}

export default App;
