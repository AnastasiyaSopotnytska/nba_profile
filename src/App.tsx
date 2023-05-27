import React from 'react';
import { Players } from './components/Players';
import { Teams } from './components/Teams';

const App = () => {
  return (
    <div className="lg:p-10 p-4">
      <h1 className="lg:text-7xl text-5xl text-main font-bold">NBA profile</h1>
      <Teams />
      <Players />
    </div>
  );
}

export default App;
