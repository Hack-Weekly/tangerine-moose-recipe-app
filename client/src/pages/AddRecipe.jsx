import React, { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";

const AddRecipe = () => {
  const [ingredients, updateIngredients] = useState([{ name: "", quantity: "", measurement: "" }]);
  const [instructions, updateInstructions] = useState([""]);

  const handleInputChange = (key, value, index) => {
    let arr = [...ingredients];
    arr[index][key] = value;
    updateIngredients(arr);
  };

  const removeIngredient = (index) => {
    let arr = [...ingredients];
    if (ingredients.length === 1) {
      arr[0].name = "";
      arr[0].quantity = "";
    } else {
      arr.splice(index, 1);
    }

    updateIngredients(arr);
  };

  const handleInstructionChange = (index, value) => {
    let arr = [...instructions];
    arr[index] = value;
    updateInstructions(arr);
  };

  const removeInstruction = (index) => {
    let arr = [...instructions];
    if (instructions.length === 1) {
      arr[0] = "";
    } else {
      arr.splice(index, 1);
    }

    updateInstructions(arr);
  };

  return (
    <div className='mt-10 w-3/4 mx-auto h-full mb-4'>
      <h1 className='text-3xl font-bold'>Add New Recipe</h1>
      <div className='w-full mx-auto mt-3 flex flex-grow divide-x'>
        <div className='md:w-1/2 sm:w-full mr-2 h-full'>
          <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>
            <div className='sm:col-span-2 pb-2'>
              <label htmlFor='title' className='block text-md font-semibold leading-6 text-gray-900'>
                Title
              </label>
              <div className='pt-2'>
                <input
                  type='text'
                  placeholder='Name of recipe'
                  name='title'
                  id='recipe-title'
                  autoComplete='off'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'
                />
              </div>
            </div>
            <div className='mt-2 border-t md:col-span-2 sm:col-span-12 pt-2'>
              <label className='block text-md font-semibold leading-6 text-gray-900'>Ingredients</label>
              {ingredients.map((cell, index) => {
                return (
                  <div key={`ingredient_${index}`} className='pt-1 grid grid-cols-6'>
                    <input
                      type='text'
                      onChange={(e) => handleInputChange("name", e.target.value, index)}
                      value={cell.name}
                      name={`ingredient_${index}`}
                      key={`ingredient_${index}`}
                      id={`ingredient_${index}`}
                      autoComplete='off'
                      placeholder='Ingredient'
                      className='w-full col-span-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'
                    />
                    <div className='relative col-span-2'>
                      <input
                        type='text'
                        onChange={(e) => handleInputChange("quantity", e.target.value, index)}
                        value={cell.quantity}
                        name={`quantity${index}`}
                        key={`quantity_${index}`}
                        id={`quantity${index}`}
                        autoComplete='off'
                        placeholder='Quantity'
                        className='w-full rounded-md border-0 px-3.5 py-2 ml-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'
                      />
                      <div className='absolute inset-y-0 right-0 flex items-center text-gray-500'>
                        <label htmlFor='hs-inline-leading-select-currency' className='sr-only'>
                          Measurement
                        </label>
                        <select
                          value={cell.measurement}
                          onChange={(e) => {
                            handleInputChange("measurement", e.target.value, index);
                          }}
                          id='hs-inline-leading-select-currency'
                          name='hs-inline-leading-select-currency'
                          className='block w-full border-transparent rounded-md dark:bg-gray-800 focus:outline-none'>
                          <option value='cup'>cup</option>
                          <option value='lb'>lb</option>
                          <option value='kg'>kg</option>
                          <option value='tsp'>tsp</option>
                          <option value='tbsp'>tbsp</option>
                        </select>
                      </div>
                    </div>
                    <div className='ml-auto'>
                      <button
                        className='bg-red-600 hover:bg-red-800 h-full w-10 rounded-lg'
                        onClick={() => removeIngredient(index)}>
                        <DeleteIcon />
                      </button>
                    </div>
                    {index === ingredients.length - 1 && (
                      <div className='pt-3 col-span-2'>
                        <button
                          className='h-10 w-fit px-3 py-0 rounded-lg bg-green-600 hover:bg-green-500'
                          onClick={() => {
                            const temp = { name: "", quantity: "" };
                            updateIngredients([...ingredients, temp]);
                          }}>
                          Add Ingredient
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='w-1/2 ml-2 h-full'>
          <div className='sm:col-span-2 pl-3'>
            <label className='block text-md font-semibold leading-6 text-gray-900 mb-1'>Instructions</label>
            {instructions.map((cell, index) => {
              return (
                <div key={`instruction_${index}`} className='pt-1 grid grid-cols-6'>
                  <input
                    type='text'
                    onChange={(e) => handleInstructionChange(index, e.target.value)}
                    value={cell}
                    name={`instructions_${index}`}
                    key={`instructions_${index}`}
                    id={`instructions_${index}`}
                    autoComplete='off'
                    placeholder='Enter Step'
                    className='w-full col-span-5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none'
                  />
                  <div className='ml-auto'>
                    <button
                      className='bg-red-600 hover:bg-red-800 h-full w-10 rounded-lg'
                      onClick={() => removeInstruction(index)}>
                      <DeleteIcon />
                    </button>
                  </div>
                  {index === instructions.length - 1 && (
                    <div className='pt-3 col-span-2'>
                      <button
                        className='h-10 w-fit px-3 py-0 rounded-lg bg-green-600 hover:bg-green-500'
                        onClick={() => {
                          updateInstructions([...instructions, ""]);
                        }}>
                        Add Next Step
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
