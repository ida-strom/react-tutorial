import React from 'react';
import './App.css';
import Content from './Pages/Content/Content';
import Toolbar from './Components/Toolbar/Toolbar';
import SectionTwo from './Pages/SectionTwo/SectionTwo';
import SectionThree from './Pages/SectionThree/SectionThree';
import ButtonSecondary from './Components/ButtonSecondary/ButtonSecondary';

function App() {
  return (
    <div className="App">

      <Toolbar />

      <Content />
      <SectionTwo />
      <SectionThree />
      <SectionTwo />
      <SectionTwo />
      
    </div>
  );
}

export default App;
