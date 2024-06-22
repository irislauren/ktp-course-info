import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import CoursesPage from './pages/Courses'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <h1>KTP Course Information!</h1>
          <Link to="/courses" className="App-link">View Courses</Link>
        </header> */}
        <Routes>
          <Route path="/ktp-course-info" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
