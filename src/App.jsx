import './App.css';
import DesktopLanding from './imports/LandingPageDesign';
import MobileLanding from './imports/MobileResponsiveDesign';

// Main App Component with Responsive Landing Page Sections
function App() {
  return (
    <div className="app-container">
      {/* Desktop Version - Shows on screens >= 1024px */}
      <div className="desktop-view">
        <DesktopLanding />
      </div>
      
      {/* Mobile Version - Shows on screens < 1024px */}
      <div className="mobile-view">
        <MobileLanding />
      </div>
    </div>
  );
}

export default App;
