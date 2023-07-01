import React from "react";

const SearchBar = () => {
  return (
    <div className='relative w-1/2 mx-auto'>
      <input
        type='text'
        name='search-recipe'
        id='search-recipe'
        placeholder='Search for recipes'
        className='block mx-auto h-12 w-full rounded-lg px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-10 focus:outline-none'
      />
      <span className='absolute inset-y-0 right-0 flex items-center px-5 text-gray-400'>
        <label className='focus:outline-none focus:shadow-outline'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            className='w-6 h-6'>
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </label>
      </span>
    </div>
  );
};

export default SearchBar;
