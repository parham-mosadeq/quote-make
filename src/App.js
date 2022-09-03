import React from 'react';
// Component
import Navbar from './components/Navbar';
import Routers from './components/Routers';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routers />
      </div>
    </>
  );
};

export default App;
