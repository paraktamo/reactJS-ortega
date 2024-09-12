import React from 'react';
import NavBar from './components/NavBar-temp'; 
import ItemListContainer from './components/ItemListContainer-temp'; 

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer greeting="Bienvenido a Casa del Sur" /> 
    </div>
  );
}

export default App;

