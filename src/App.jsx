import { Routes, Route, Navigate } from 'react-router-dom'
import StudioPage from './Pages/Studio/StudioPage'
import AboutPage from './Pages/About/AboutPage'
import ContactPage from './Pages/Contact/ContactPage'
import BlogPage from './Pages/Blog/BlogPage'
// import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/" element={<Navigate to="/studio" replace />} />
    </Routes>
  );
}

export default App;
