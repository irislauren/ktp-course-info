import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import CoursesPage from './pages/Courses'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ktp-course-info" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
