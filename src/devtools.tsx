import { render, html } from "./_preact";
import { useState, useCallback } from "preact/hooks";
import { h } from "preact";

// #region 4... ⚛️ Devtools
const Toppings = ({ toppings, setTopping }) => {
  return (
    <div class="dio-inline dio-inline--gap-1 dio-align--center">
      {toppings.map(topping => (
        <button onClick={() => setTopping(topping)}>${topping}</button>
      ))}
    </div>
  );
};

const Price = ({ pizzaOrder }) => {
  const price = pizzaOrder.topping === "🍆" ? 5 : 2;
  return <code>Price: ${price}</code>;
};

// main
const PizzaOrder = () => {
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
  return (
    <div class="dio-stack">
      <code>{JSON.stringify(pizzaOrder)}</code>
      <Toppings toppings={toppings} setTopping={setTopping} />
      <Price pizzaOrder={pizzaOrder} />
    </div>
  );
};

// #endregion

// #region blerg
render(<PizzaOrder />, document.querySelector("#root-devtools"));
// #endregion
