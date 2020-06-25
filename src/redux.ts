import { render, html } from "./_preact";
import { useState, useCallback } from "preact/hooks";
import { createStore } from "redux";

// #region 4... 🤷‍♀️ Redux (store junk)
const setPizzaOrder = pizzaOrder => ({
  type: "SET_PIZZA_ORDER",
  payload: pizzaOrder
});

const reducer = (
  state = {
    pizzaOrder: {
      topping: null,
      base: "standard"
    }
  },
  action
) => {
  switch (action.type) {
    case "SET_PIZZA_ORDER":
      return {
        ...state,
        pizzaOrder: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const actions = {
  setPizzaOrder: topping => store.dispatch(setPizzaOrder(topping))
};

// #endregion

// #region 4... 🤷‍♀️ Redux
const Toppings = ({ toppings, setTopping }) => {
  return html`
    <div
      class="dio-inline dio-inline--gap-1 dio-align--center"
      toppings=${{ ...toppings }}
      setTopping=${setTopping}
    >
      ${toppings.map(
        topping =>
          html`
            <button onClick=${() => setTopping(topping)}>${topping}</button>
          `
      )}
    </div>
  `;
};

const Price = ({ pizzaOrder }) => {
  const price = pizzaOrder.topping === "🍆" ? 5 : 2;
  return html`
    <code pizzaOrder=${{ ...pizzaOrder }}>Price: $${price}</code>
  `;
};

// main
const PizzaOrder = ({ pizzaOrder, setPizzaOrder }) => {
  const setTopping = useCallback(
    topping => {
      setPizzaOrder({ ...pizzaOrder, topping });
    },
    [pizzaOrder]
  );
  const toppings = ["🍆", "🍗", "🥓"];
  return html`
    <div class="dio-stack">
      <code>${JSON.stringify(pizzaOrder)}</code>
      ${Toppings({ toppings, setTopping })} ${Price({ pizzaOrder })}
    </div>
  `;
};

// #endregion

// #region blerg
const renderWithRedux = state =>
  render(
    PizzaOrder({ ...state, setPizzaOrder: actions.setPizzaOrder }),
    document.querySelector("#root-redux")
  );

store.subscribe(() => renderWithRedux(store.getState()));

renderWithRedux(store.getState());
// #endregion
