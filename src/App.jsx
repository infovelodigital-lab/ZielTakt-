import { Suspense, lazy } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';

const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <MotionConfig reducedMotion="user">
      <Router>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
      </MotionConfig>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
