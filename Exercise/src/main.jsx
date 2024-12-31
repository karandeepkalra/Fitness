import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AContext from './Components/Files/Context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AContext>
      <App />
      </AContext>
  </StrictMode>,
)
