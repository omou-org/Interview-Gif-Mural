import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleContainer from './components/Container/Container';
import SimpleCard from "./components/Card/Card";

function App() {
  return (
    <div className="App">
    <SimpleContainer>
      <SimpleCard />
    </SimpleContainer>
    </div>
  );
}

export default App;
