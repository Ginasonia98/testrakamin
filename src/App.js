import React from 'react';
import Button from './components/Button';
import Card1 from './components/Card1';

const App = () => {
  return (
    <div>
      <Button />
      <hr className="mt-4" />
      <div className="mt-4 px-4">
        <Card1 />
      </div>
    </div>
  );
};

export default App;

