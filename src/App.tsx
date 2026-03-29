/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AIPlanner from './pages/AIPlanner';
import EventGallery from './pages/EventGallery';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-gallery" element={<EventGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-planner" element={<AIPlanner />} />
        </Routes>
      </Layout>
    </Router>
  );
}
