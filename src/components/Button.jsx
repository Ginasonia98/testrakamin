import React from 'react';
import { RiAddLine } from 'react-icons/ri';

const Button = () => {


  return (
    <div>
      <div className="flex items-center">
        <p className="text-black font-semibold text-sm ml-4 mr-2">Product Roadmap</p>
        <button
          className="w-36 h-7 rounded-lg bg-cyan-500 text-white border-none mt-2 flex items-center"
        >
          <RiAddLine size={16} className="mr-1" />
          <span>Add New group</span>
        </button>
      </div>
    </div>
  );
};

export default Button;








