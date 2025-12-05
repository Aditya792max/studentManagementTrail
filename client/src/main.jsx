import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchStudentByAge from './searchStudentByAge.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SearchStudentByAge />
  </StrictMode>,
)
