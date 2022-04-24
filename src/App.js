import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Project />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
