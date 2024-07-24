
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import UserTyper from './components/UserTyper'
import Home from './components/Home'

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Home/>
    </Router>
  )
}

export default App
