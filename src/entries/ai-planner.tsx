import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';
import AIPlanner from '../pages/AIPlanner';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <AIPlanner />
    </Layout>
  </StrictMode>,
);
