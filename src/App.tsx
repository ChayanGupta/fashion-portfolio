import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import 'react-multi-carousel/lib/styles.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Contact/>
    </>
  );
}

export default App;
