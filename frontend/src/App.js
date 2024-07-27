import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Create/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route path="/:id" element={<Update/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App
