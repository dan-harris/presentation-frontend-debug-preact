import { expensiveOperation } from "./_utils";
const cache = {};

// #region 7... 🧛 Function Memoization

// make a salad
// -> EXPENSIVE to do
const makeSalad = async (food1, food2) => {
  console.time("👉 salad took ");

  await expensiveOperation();

  console.timeEnd("👉 salad took ");
  console.log(food1 + " with " + food2 + " ...yummy yummy");
};

// memoize makeSalad
const memoMakeSalad = async (food1, food2) => {
  console.time("👉 salad took ");

  if (cache[food1 + food2]) {
    // short circuit
    console.timeEnd("👉 salad took ");
    console.log(food1 + " with " + food2 + " ...yummy yummy");
  } else {
    // execute the actual operation
    await expensiveOperation();

    console.timeEnd("👉 salad took ");
    console.log(food1 + " with " + food2 + " ...yummy yummy");

    // store the result in cache
    cache[food1 + food2] = food1 + " with " + food2 + " ...yummy yummy";
  }
};

// #endregion

// #region 8... 🦄 Selector Memoization_

// composed selectors ('calculated data')
// -> memoized
// const getFood = createSelector(
//   getFruit,
//   getMeals,
//   (fruits, meals) => ({ ...fruits, ...meals })
// );

// #endregion

// #region blerg
export { makeSalad, memoMakeSalad };
// #endregion
