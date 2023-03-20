import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Default from './assets/page';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Locked from './components/Locked';
import NewContact from './components/NewContact';

import { Route } from 'react-router-dom';


function App() {
  Default()
  return (
    <div>
      <NavBar />
      <div className="content" style={{marginTop: '65px'}}>
        <Route path="/" exact component={Index} />
        <Route path="/contact" exact component={NewContact} />
        <Route path="/about" exact component={About} />
        <Route path="/donate" exact component={Locked} />
        <Route path="/gallery" exact component={Locked} />
        <Route path="/documentation" exact component={Locked} />
      </div>
      <Footer />
    </div>
  );
}

export default App;