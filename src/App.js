import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Default from './assets/page';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  // Default()
  return (
    <div>
      <NavBar />
      <div className="content" style={{marginTop: '65px'}}>
        <Routes>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
       </div>
      <Footer />
    </div>
  );
}

export default App;