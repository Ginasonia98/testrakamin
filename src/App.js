import React from 'react';
import Button from './components/Button';
import Card1 from './components/Card1';

const App = () => {
  return (
    <div>
      <Button />
      <hr className="mt-4" />
      <div className="flex flex-col items-center">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-4">
          <Card1 id="card-1" title="Re-designed the zero-g doggie bags. No more spills!" progress={100} />
          <Card1 id="card-2" title="Bundle interplanetary analytics for improved transmission" progress={30} />
        </div>
      </div>
    </div>
  );
};

export default App;

