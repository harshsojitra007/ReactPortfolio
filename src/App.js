import './App.css';
import About from './components/About';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app-outer">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>
    </div>
  );
}

export default App;
