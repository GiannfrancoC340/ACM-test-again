import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import MapView from './Components/MapView'
import FlightInfo from './Components/FlightInfo'
import ProtectedRoute from './routes/ProtectedRoute'
import './App.css'
import './Components/FlightInfo.css'
import AudioPlayer from './Components/AudioPlayer'
import acmLogo from './assets/ACM Logo.png'
import Settings from './Components/Settings'

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
        <img src={acmLogo} className="image-logo" alt="ACM Logo" />

        {/* Settings Button */}
        <Link 
          to="/settings"
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            padding: '12px 24px',
            backgroundColor: '#4285f4',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3367d6';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(66, 133, 244, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4285f4';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
          }}
        >
          ⚙️ Settings
        </Link>
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
        <Route path="/audio" element={<AudioPlayer />} />
        <Route path="/settings" element={<Settings />} />
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