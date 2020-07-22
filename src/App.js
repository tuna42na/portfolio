import React from 'react';
import {Links} from './components/links';
import './App.css';
import { Container, Row } from 'reactstrap';
import tunalogo from './images/tunalogo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img id="tunaheaderlogo" src={tunalogo}/>
        <Container>
            <Links />
        </Container>
        
      </header>
    </div>
  );
}

export default App;
