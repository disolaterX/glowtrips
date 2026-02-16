import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Page components
const Home = () => <h1>Home</h1>
const Vietnam = () => <h1>Vietnam</h1>
const Bali = () => <h1>Bali</h1>
const Thailand = () => <h1>Thailand</h1>
const About = () => <h1>About</h1>
const Privacy = () => <h1>Privacy</h1>
const Terms = () => <h1>Terms</h1>

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vietnam" element={<Vietnam />} />
        <Route path="/bali" element={<Bali />} />
        <Route path="/thailand" element={<Thailand />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  )
}

export default App
