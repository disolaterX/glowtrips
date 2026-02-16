import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Vietnam from './pages/Vietnam'
import Bali from './pages/Bali'
import Thailand from './pages/Thailand'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vietnam" element={<Vietnam />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
