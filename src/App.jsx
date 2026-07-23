import './App.css';
import HomeSection from './components/HomeSection';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="App-container">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
