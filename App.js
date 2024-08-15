import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = (
  <h1 id="heading" tabIndex="7">
    🧑‍💻 Namaste React using JSX 🚀
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
