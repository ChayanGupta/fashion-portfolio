import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'react-multi-carousel/lib/styles.css';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Achievements/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;
