import { render, html } from "./_preact";
import { useState, useCallback, useMemo } from "preact/hooks";
import { h } from "preact";
import { memo } from "preact/compat";

// #region 4... ⚛️ Devtools
const MakeAPizza = ({ pizzaCount = 2 }) => {
  const emptyArray = Array.from(new Array(pizzaCount));
  return (
    <div class="dio-box dio-width-max">
      <div class="dio-inline dio-inline--gap-1 dio-align--center">
        {emptyArray.map(() => (
          <span class="dio_devtools-pizza">🍕</span>
        ))}
      </div>
    </div>
  );
};

const PizzaCount = ({ count }) => {
  return <code>Amount: x {count}</code>;
};

const Price = ({ price }) => {
  return <code>Price: ${price}</code>;
};

// main
const PizzaList = () => {
  const [renderCountInput, setRenderCountInput] = useState(10000);
  const [renderCount, setRenderCount] = useState(10000);
  const handleRender = useCallback(() => {
    setRenderCount(Number(renderCountInput));
  }, [setRenderCount, renderCountInput]);
  return (
    <div class="dio-stack dio-align--center">
      <div class="dio-inline dio-inline--gap-1 dio-align--center">
        <input
          type="text"
          value={renderCountInput}
          onChange={e => setRenderCountInput(e.target.value)}
        />
      </div>
      <div class="dio-inline dio-inline--gap-1 dio-align--center">
        <button onClick={handleRender}>render</button>
      </div>
      <MakeAPizza pizzaCount={renderCount} />
      <PizzaCount count={renderCount} />
      <Price price={5} />
    </div>
  );
};

// #endregion

// #region blerg
// render(<PizzaList />, document.querySelector("#root-bonus-usememo"));
// #endregion
