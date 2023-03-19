import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Default from './assets/page';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';

import { Route } from 'react-router-dom';


function App() {
  Default()
  return (
    <div>
      <NavBar />
      <div className="content" style={{marginTop: '65px', marginBottom: '0px!important'}}>
        <Route path="/" exact component={Index} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </div>
      <Footer />
    </div>
  );
}

export default App;