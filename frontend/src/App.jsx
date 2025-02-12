import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import {ProtectedRoute,UnprotectedRoute} from './components/routes/Route'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<UnprotectedRoute element={<Login/>}/>} />
        <Route path="/signup" element={<UnprotectedRoute element={<Signup/>}/>} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile/>}/>} />
        <Route path="/home" element={<ProtectedRoute element={<Home/>}/>}/>
      </Routes>
    </Router>
  )
}

export default App