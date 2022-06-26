import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FilterProvider } from "./Filter-context";
import { CartProvider } from "./cart-context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </StrictMode>
);
