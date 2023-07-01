import React from "react";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/RightArrow";

const NavigationButtons = ({ increment, decrement }) => {
  return (
    <div className='mt-4 w-1/2 mx-auto flex justify-center'>
      <button
        onClick={() => {
          decrement();
        }}
        className='flex items-center px-4 py-2 mr-5 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
        <LeftArrow />
        Previous
      </button>
      <button
        onClick={() => {
          increment();
        }}
        className='flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
        Next
        <RightArrow />
      </button>
    </div>
  );
};

export default NavigationButtons;
