
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, BrowserRouter as Router,Route } from "react-router-dom"
import { Component } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import CropImage from './component/CropImage';
import Temp from './component/temp';
import Uploaddata from './component/uploaddata';
import Imagecomp from './component/imagecomp';
import { Card } from 'react-bootstrap';
// import Home1 from './component/Home1';



class App extends Component {
  render() {
    return (
      <Router>
        
        <Navbar />
      


        <Routes>
          {/* <Route exact path="/" render={() => <Redirect to="" />} /> */}
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/card" element={<Card/>} />
          <Route exact path="/uploaddata" element={<Uploaddata/>} />
          <Route exact path="/editimage" element={<Imagecomp/>} />
          <Route exact path="/crop" element={<CropImage/>} />
          <Route exact path="/temp" element={<Temp/>} />




        </Routes>
        
      

      </Router >

    );
  }
}

export default App;
