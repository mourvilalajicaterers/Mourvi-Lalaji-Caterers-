import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';
import EventGallery from '../pages/EventGallery';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <EventGallery />
    </Layout>
  </StrictMode>,
);
