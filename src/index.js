import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App"
import ShopContextProvider from "./context/ShopContext";
const root = createRoot(document.querySelector("#root"));
root.render(
<ShopContextProvider>
<App />
</ShopContextProvider>);