
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import Options from './pages/Options';
import About from './pages/About';
import Forums from './pages/Forums';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <div className="pages">
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path ="/sign-up" element = {<SignUp/>}></Route>
          <Route path ="/leaderboard" element = {<Leaderboard/>}></Route>
          <Route path ="/options" element = {<Options/>}></Route>
          <Route path ="/about" element = {<About/>}></Route>
          <Route path ="/forums" element = {<Forums/>}></Route>
          <Route path ="/login" element = {<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
