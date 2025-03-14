import React from "react";
import ReactDOM from "react-dom/client";

//JSX = React.createElement = object = HTML(DOM)
const heading =  (
  <h1 id="title" key="h2">
    Riya
  </h1>
);

// React Component
// Fncional - NEw way
// Class Based Component - OLD way
// Name of component starts with capital letter - it's not mandatory
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Hi functional componenet</h1>
      <h2>Rfgfdg</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
