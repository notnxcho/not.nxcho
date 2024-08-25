import './App.scss';
import About from './components/About';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Hero />
      <WorkExperience />
      <About />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
