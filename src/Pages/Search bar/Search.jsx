import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { useGlobalHooke } from '../../hooks/Context';
import "./search.css";
const Search = () => {
    const{changeHandler,clickHandler,searchRecipe} = useGlobalHooke();
  return (
    <div className="search">
        <input type="text" name="recipe" placeholder="Search your favorite recipe " autoComplete='off' onChange={changeHandler} value={searchRecipe}  />
        <button className='btn-search' onClick={clickHandler} aria-label="search"><BsSearch/></button>
    </div>
  )
}

export default Search