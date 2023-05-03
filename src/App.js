
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import card from "./component/card";
import { Component } from 'react';
import uploaddata from './component/uploaddata';
import Navbar from './component/Navbar';
import Home from './component/Home';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Home/>


        <Switch>
          <Route exact path="/" render={() => <Redirect to="" />} />
          {/* <Route exact path="/home" component={Home}/> */}
          <Route exact path="/card" component={card} />
          <Route exact path="/uploaddata" component={uploaddata} />

        </Switch>
        </div>
      

      </Router >

    );
  }
}

export default App;
