import { render, html } from "./_preact";
import { useState, useCallback } from "preact/hooks";

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

  return html`
    <div class="dio-stack">
      <code>${JSON.stringify(pizzaOrder)}</code>
      <button onClick=${() => setTopping("🍆")}>🍆</button>
      <button onClick=${() => setTopping("🍗")}>🍗</button>
      <button onClick=${() => setTopping("🥓")}>🥓</button>
    </div>
  `;
}

// render(
//   html`
//     <${PizzaOrder} />
//   `,
//   document.querySelector("#root-debug")
// );
