import React from "react";
import { RiAddLine } from "react-icons/ri";

const Button = ({ createNewGroup }) => {
  return (
    <header class="bg-white shadow sticky w-full z-50 top-0">
      <div class="container mx-auto px-4 flex items-center h-20">
        <div class="flex gap-4 items-center max-sm:justify-between max-sm:flex-col max-sm:gap-0 max-sm:items-start">
          <h1 class="text-lg font-bold">Product Roadmap</h1>
          <button
            onClick={createNewGroup}
            class="h-fit py-1 px-4 text-center rounded-lg font-bold bg-dark-green shadow-sm text-white"
          >
            <div class="flex items-center gap-2">
              <RiAddLine size={16} className="mr-1" />
              Add New Group
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Button;
