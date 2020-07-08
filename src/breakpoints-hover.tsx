import { render, html } from "./_preact";
import { useState, useCallback } from "preact/hooks";
import { h } from "preact";

// #region 3... 💔 Breakpoints
const PizzaOrder = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div class="dio-stack">
      <div class="dio-inline dio-inline--gap-1 dio-align--center">
        <button class="dio_breakpoints-hover-menu-button">
          🍆
          <div class="dio_breakpoints-hover-menu">👍👍👍</div>
        </button>
        <button class="dio_breakpoints-hover-menu-button">
          🍗
          <div class="dio_breakpoints-hover-menu">👍👍👍</div>
        </button>
        <button
          class="dio_breakpoints-hover-menu-button"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          🥓
          {isHovering && (
            <div class="dio_breakpoints-hover-menu--programatic">👍👍👍</div>
          )}
        </button>
      </div>
    </div>
  );
};

// #endregion

// #region blerg
render(<PizzaOrder />, document.querySelector("#root-breakpoints-hover"));
// #endregion
