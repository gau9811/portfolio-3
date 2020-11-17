import React from 'react';
import './App.css';
import MainPage from "./MainPage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Routes from "./Routes"

function App() {
   return (
      <Router>
         <Route path="/" exact component={MainPage} />
         <Route component={Routes} />
      </Router>
   )
}

export default App;
