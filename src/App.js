import React from 'react';
import Button from './components/Button';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';

const App = () => {
  return (
    <div>
      <Button />
      <hr className="mt-4" />
      <div className="flex flex-col items-center">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-4">
          <div>
            <Card1 />
          </div>
          <div>
            <Card2 />
          </div>
          <div>
            <Card3 />
          </div>
          <div>
            <Card4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;











