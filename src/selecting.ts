import { createSelector } from "reselect";

// #region 3... 🍱 Selecting from an Object

// setup some state
const state = {
  fruits: {
    banana: "🍌",
    apple: "🍎",
    chilli: "🌶"
  },
  meals: {
    burger: "🍔",
    hotdog: "🌭",
    pizza: "🍕"
  }
};

// selectors
const getFruit = state => state.fruits;
const getMeals = state => state.meals;

// composed selectors ('calculated data')
const getFood = createSelector(
  getFruit,
  getMeals,
  (fruits, meals) => ({ ...fruits, ...meals })
);

// #endregion

// #region 4... 🚨 Preventing reference changes

// ?? object equality
// pizza = { pepperoni: true, cheese: true }
// orderedPizza = pizza
// orderedPizza === pizza
// pizza.pepperoni = false
// orderedPizza === pizza
// pizza = { ...pizza, pepperoni: false }
// ?? selector return equality
// rerun(getFood(state))
// state = { ...state, fruits: { ...fruits, apple: '🍏' }}

// #endregion

// #region blerg
export { getFood, getFruit, getMeals, state };
// #endregion
