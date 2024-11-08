import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import App from 'src/App.jsx'
import { Buffer } from 'buffer';
window.Buffer = Buffer;
window.global = window;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
