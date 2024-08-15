import React from "react";
import ReactDOM from "react-dom/client";

// React Element
function TitleOne() {
  return (
    <h1 id="heading" tabIndex="7">
      🧑‍💻 Title one using JSX
    </h1>
  );
}

const TitleTwo = function () {
  return (
    <h1 id="heading" tabIndex="7">
      🧑‍💻 Title two using JSX
    </h1>
  );
};

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <TitleOne />
    <TitleTwo />
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
