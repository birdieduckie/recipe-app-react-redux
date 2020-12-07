import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getRecipesRequest } from '../../store/main/main.actions';

export const App = () => {
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.main.recipes)

  const getRecipes = () => dispatch(getRecipesRequest())

  console.log(recipes)

  return (
    <div>
      <button onClick={getRecipes}>show recipes please</button>
      {recipes.length > 0 && recipes.map(recipe => <div key={recipe.title}>{recipe.title}</div>)}
    </div>
  )
}