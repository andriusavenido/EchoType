
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Home/>
    </Router>
  )
}

export default App
