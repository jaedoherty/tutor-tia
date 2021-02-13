// import logo from './logo.svg';
import './App.css';
import './stylesheets/home_page.css'
import './stylesheets/multiplication.css'
import React from 'react'
import { Switch, Route } from "react-router-dom";
import Homepage from './components/home_page' 
import Multiplication from './components/multiplication'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/multiply" component={Multiplication}/>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;