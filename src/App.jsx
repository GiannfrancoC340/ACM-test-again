import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import MapView from './Components/MapView'
import FlightInfo from './Components/FlightInfo'
import ProtectedRoute from './routes/ProtectedRoute'
import './App.css'
import './Components/FlightInfo.css'

// Route info component to show current route
function RouteInfo() {
  const location = useLocation();
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px',
      padding: '10px',
      background: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999 // Make sure it's on top of everything
    }}>
      <p><strong>Current Route:</strong> {location.pathname}</p>
    </div>
  );
}

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>ACM Home</h1>
        <p className="tagline">Welcome to ACM. Please log in or sign up to continue.</p>
        <div className="home-links">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/map" 
          element={
            <ProtectedRoute>
              <MapView />
            </ProtectedRoute>
          }
        />
        {/* New route for flight information */}
        <Route path="/flights/:flightId" element={<FlightInfo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      {/* Add the RouteInfo component outside of Routes so it appears on every page */}
      <RouteInfo />
    </>
  );
}

export default App;