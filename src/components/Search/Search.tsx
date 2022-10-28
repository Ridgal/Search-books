// import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBooks } from "../../redux/books/bookSlice";
import { booksSearch, booksCategories, booksSort, booksIndex } from "../../redux/books/bookSlice";


const Search: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const {valueSearch, categories, sort, maxResults} = useAppSelector((state) => state.books);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getBooks({valueSearch, categories, sort, maxResults}));
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit}>   
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="flex w-full">
        <input 
          type="text" 
          id="simple-search"
          autoComplete="off"
          value={valueSearch}
          onChange={ (event) => dispatch(booksSearch(event.target.value))}
          className="w-full bg-indigo-50 block p-3 pl-5 border rounded-bl-lg border-zinc-700 focus:ring-gray-800 focus:border-gray-800 text-gray-900 text-base font-semibold" 
          placeholder="Search..."
        />
        <button
          onClick={() => handleSubmit} 
          type="submit" 
          className="bg-blue-700 border-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-500/50 rounded-br-lg rounded-tr-lg text-white left-[95%] text-sm px-4 py-[10px]" 
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-around">
        <div className="flex items-center pt-5 w-[20%]">
          <label htmlFor="categories" className="block mb-2 mr-4 text-xl font-medium text-slate-100">Categories</label>
          <select 
            id="categories" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={categories}
            onChange={ (event) => dispatch(booksCategories(event.target.value))}
          >
            <option value="All">All</option>
            <option value="Art">Art</option>
            <option value="Biography">Biography</option>
            <option value="Computers">Computers</option>
            <option value="History">History</option>
            <option value="Medical">Medical</option>
            <option value="Poetry">Poetry</option>
          </select>
        </div>
        <div className="flex items-center pt-5 w-[20%]">
          <label htmlFor="sorting" className="block mb-2 mr-4 text-xl font-medium text-slate-100">Sorting</label>
          <select 
            id="sorting" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={sort}
            onChange={ (event) => dispatch(booksSort(event.target.value))}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="flex items-center pt-5 w-[25%]">
          <label htmlFor="max_results" className="block mb-2 w-[65%] mr-4 text-xl font-medium text-slate-100">Max Results</label>
          <input
            id="max_results"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            value={maxResults}
            onChange={ (event) => dispatch(booksIndex(parseInt(event.target.value)))}
          />
        </div>
      </div>
    </form>
  );
}; 

export { Search };