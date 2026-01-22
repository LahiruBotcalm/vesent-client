import Navbar from './components/Navbar'; 
import './App.css';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Industries from './components/Industries';
import ComplianceSuite from './components/ComplianceSuite';
import AISection from './components/AISection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {

  return (
      <div className="bg-black mx-auto w-full max-w-[1920px] scroll-smooth">
        <Navbar />
        <Hero/>
        <AboutUs/>
        <Industries/>
        <ComplianceSuite/>
        <AISection/>
        <CTASection/>
        <Footer/>
      </div>
    
  );
}

export default App;