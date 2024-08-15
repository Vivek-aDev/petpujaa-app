import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "🧑‍💻 Namaste React 🧑‍🚀"
);

//jsx
const jsxHeading = <h1 id="heading">🧑‍💻 Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
