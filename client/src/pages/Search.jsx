import React, { useEffect, useState } from "react";
import SearchBar from "../components/Search/SearchBar";
import RecipeCard from "../components/Search/RecipeCard";
import { data } from "../mock-data";
import NavigationButtons from "../components/Search/NavigationButtons";

const Search = () => {
  const itemsPerPage = 8;
  const [pageNumber, updatePageNumber] = useState(0);
  const [paginatedItems, updatePaginatedItems] = useState([]);

  useEffect(() => {
    const nextItems = Math.min(8, data.length - pageNumber * itemsPerPage);
    const paginatedItemsSpliced = [...data].splice(pageNumber * itemsPerPage, nextItems);
    updatePaginatedItems(paginatedItemsSpliced);
  }, [pageNumber]);

  const incrementPageNumber = () => {
    console.log("HERE");
    if ((pageNumber + 1) * itemsPerPage > data.length) return;
    updatePageNumber(pageNumber + 1);
  };

  const decrementPageNumber = () => {
    if (pageNumber === 0) return;
    updatePageNumber(pageNumber - 1);
  };

  return (
    <div className='mt-10 w-20xl max-w-20xl'>
      <SearchBar />
      <div className='mt-5 w-3/4 max-w-full mx-auto flex flex-wrap'>
        {paginatedItems.map((item, index) => {
          return (
            <div key={`recipe-card-${index}`} className='w-1/4 mb-5 px-2'>
              <RecipeCard info={item} />
            </div>
          );
        })}
      </div>
      <NavigationButtons increment={incrementPageNumber} decrement={decrementPageNumber} />
    </div>
  );
};

export default Search;
