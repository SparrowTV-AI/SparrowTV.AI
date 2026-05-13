import './App.css';
import Nav from './components/Banner/banner';
import Hero from './components/Hero/Hero';
import TrustLogos from './components/TrustLogos/TrustLogos';
import Features from './components/Features/Features';
import Stats from './components/Stats/Stats';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Audiences from './components/Audiences/Audiences';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustLogos />
      <Features />
      <Stats />
      <HowItWorks />
      <Audiences />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
