import { render, html } from "./_preact";
import { useState, useCallback } from "preact/hooks";

// #region 4... ⚛️ Devtools
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
function PizzaOrder() {
  const [pizzaOrder, setPizzaOrder] = useState({
    topping: null,
    base: "standard"
  });
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
}

// #endregion

// #region blerg
render(
  html`
    <${PizzaOrder} />
  `,
  document.querySelector("#root-devtools")
);
// #endregion
