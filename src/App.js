// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Projects } from './components/Project';
import { Technologies } from './components/Technologies';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
