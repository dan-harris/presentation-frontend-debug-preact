import { render, html } from "./_preact";
import { useState, useCallback } from "preact/hooks";

// #region 2... 💔 Breakpoints console.log

// garnish a food with some fruit
const logPizza = () => {
  let pizzaOrder = {
    topping: null,
    base: "standard"
  };
  console.log({ pizzaOrder });
  pizzaOrder.topping = "🐔";
};

const logPizzaStringify = () => {
  let pizzaOrder = {
    topping: null,
    base: "standard"
  };
  console.log(JSON.stringify(pizzaOrder));
  pizzaOrder.topping = "🐔";
};

// #endregion

// 3... 💔 Breakpoints :hover

// #region 4... 💔 Breakpoints source

// source breakpoints
function PizzaOrder() {
  const [pizzaOrder, setPizzaOrder] = useState({
    topping: null,
    base: "standard"
  });
  const setTopping = useCallback(
    topping => {
      const newPizzaOrder = { ...pizzaOrder, topping };
      setPizzaOrder(newPizzaOrder);
    },
    [pizzaOrder]
  );

  return html`
    <div class="dio-stack">
      <code>${JSON.stringify(pizzaOrder)}</code>
      <div class="dio-inline dio-inline--gap-1 dio-align--center">
        <button onClick=${() => setTopping("🍆")}>🍆</button>
        <button onClick=${() => setTopping("🍗")}>🍗</button>
        <button onClick=${() => setTopping("🥓")}>🥓</button>
      </div>
    </div>
  `;
}

// #endregion

// #region blerg
render(
  html`
    <${PizzaOrder} />
  `,
  document.querySelector("#root-breakpoints")
);

export { logPizza, logPizzaStringify };
// #endregion
