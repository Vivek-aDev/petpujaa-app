import React from "react";
import ReactDOM from "react-dom/client";

//jsx (transpiled before it reaches the js) - PARCEL - Babel

//jsx => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">🧑‍💻 Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);