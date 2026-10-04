import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
// Self-hosted fonts: no request to Google's servers (GDPR-safe in Germany).
import '@fontsource-variable/inter'
import '@fontsource-variable/inter-tight'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
