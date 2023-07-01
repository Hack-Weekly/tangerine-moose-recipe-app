import React from "react";

const Recipe = ({ data }) => {
  return (
    <div className='mt-10 w-3/4 mx-auto h-full mb-4'>
      {/* <h1 className='text-3xl font-bold'>{data.title}</h1>
      <div className='w-full mx-auto mt-3 flex flex-grow divide-x'>
        <div className='w-1/2 mr-2 h-full'>
          <div className='grid grid-cols-2 sm:grid-cols-2'>
            <div className='mt-2 border-t sm:col-span-2 pt-2'>
              <label className='block text-md font-semibold leading-6 text-gray-900'>Ingredients</label>
              {data.ingredients.map((cell, index) => {
                return (
                  <div className='pt-1 grid grid-cols-6'>
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
                        <label for='hs-inline-leading-select-currency' className='sr-only'>
                          Currency
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
                <div className='pt-1 grid grid-cols-6'>
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
      </div> */}
      Recipe
    </div>
  );
};

export default Recipe;
