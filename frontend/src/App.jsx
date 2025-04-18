import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Navbar from './components/Navbar'
import DirectoryPage from './pages/DirectoryPage'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newMode
    })
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <LoginPage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          }
        />
        <Route path="/directory" element={<DirectoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
