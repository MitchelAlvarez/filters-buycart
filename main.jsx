import { createRoot } from "react-dom/client";
import React from "react";
import App from "./src/App";
import { FilterProvider } from "./src/context/filters.jsx";

const root = createRoot(document.getElementById('app'))
root.render(
    <FilterProvider>
        <App />
    </FilterProvider>
)