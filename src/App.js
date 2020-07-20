import React from 'react';
import logo from './logo.svg';
import {Links} from './components/links';
import './App.css';
import { Container, Row } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Container>
          <Links />
      </Container>
          
        
    
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </header>
    </div>
  );
}

export default App;
