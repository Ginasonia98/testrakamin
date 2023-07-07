import React from 'react';
import Card from './Card';

const Card1 = ({ id, title, progress }) => {
  return (
    <div className="w-72 h-full p-4 border border-cyan-300 rounded-lg shadow-md">
      <button className="w-32 text-sm border border-cyan-400 text-cyan-400">
        <h2 className="text-lg font-bold">Group Task 1</h2>
      </button>
      <p className="text-sm mt-4 mb-2 text-black">January-March</p>

      <div>
        <Card id={id} title={title} progress={progress} />
      </div>

      {/* Rest of the code */}
    </div>
  );
};

export default Card1;


