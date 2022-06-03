import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline>
      <Router>
        <App />
      </Router>
    </CssBaseline>
  </React.StrictMode>
)
