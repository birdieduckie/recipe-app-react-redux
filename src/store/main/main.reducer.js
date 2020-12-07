import { GET_RECIPES_SUCCESS } from './main.actions'

const initialState = {
  recipes: []
}

const setRecipes = (state, action) => {
  return {
    ...state,
    recipes: action.recipes
  }
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_SUCCESS:
      return setRecipes(state, action)
    default: 
      return state
  }
}