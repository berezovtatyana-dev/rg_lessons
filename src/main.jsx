import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/layout" element={<Layout />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<ServiceDetail />}>
          <Route path="/servicesDetail" element={<ServiceDetail />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
);