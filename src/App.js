
import './App.css';


import { Routes, BrowserRouter as Router,Route } from "react-router-dom"
import { Component } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Home from './component/Home';

import Imagecomp from './component/imagecomp';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/css/style.css"
import ImagetoPdf from './component/ImagetoPdf';
<link href="img/favicon.ico" rel="icon"></link>







class App extends Component {
  render() {
    return (
      <Router>
        
        <Navbar />      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/editimage" element={<Imagecomp/>} />
          <Route exact path="/imagetopdf" element={<ImagetoPdf/>} />
        </Routes>
        <Footer/>
        
      

      </Router >

    );
  }
}

export default App;
