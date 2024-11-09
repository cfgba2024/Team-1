'use client'

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../components/App'

export default function Home() {
  return (
    <Router>
      <App />
    </Router>
  )
}