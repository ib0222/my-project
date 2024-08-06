import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Header/index.css"

const Header = () => {
  return (
    <div className='flex gap-10 justify-center'>
      <NavLink to="categories">
        Categories
      </NavLink>
      <NavLink to="addcategory">
        AddCategory
      </NavLink>
      <NavLink to="favorites">
        Favorites
      </NavLink>
      <NavLink to="basket">
        Basket  
      </NavLink>

    </div>
  )
}

export default Header