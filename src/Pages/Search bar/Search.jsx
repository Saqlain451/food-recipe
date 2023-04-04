import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useGlobalHooke } from '../../hooks/Context';
import "./search.css";
const Search = () => {
  const { changeHandler, clickHandler, searchRecipe, enterClick } = useGlobalHooke();
  return (
    <div className="search">
      <input type="text" name="recipe" placeholder="Search your favorite recipe " autoComplete='off' onChange={changeHandler} value={searchRecipe} onKeyUp={enterClick} />
      <button className='btn-search' onClick={clickHandler} aria-label="search"><BsSearch /></button>
    </div>
  )
}

export default Search