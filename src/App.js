import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navbar';
import Home from './pages/Home'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <Fragment>
      <Navbars/>
      <Home/>
      <Footer/>
    </Fragment>
  );
}

export default App;
