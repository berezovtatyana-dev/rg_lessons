import React from 'react'

import './App.css'

import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
