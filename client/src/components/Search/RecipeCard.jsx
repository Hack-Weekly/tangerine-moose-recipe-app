import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ info }) => {
  return (
    <NavLink
      to={`/recipe/${info.id}`}
      className='block w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer'>
      <div>
        <h3 className='text-xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white'>{info.title}</h3>
      </div>
      <div>
        <p className='font-normal text-gray-700 dark:text-gray-400 bottom-0'>
          {info.instructions.slice(0, 150) + "..."}
        </p>
      </div>
    </NavLink>
  );
};

export default RecipeCard;
