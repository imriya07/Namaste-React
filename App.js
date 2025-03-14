import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>  React.createElement - JS object => HTMLElement(render)
//JSX - HTML Like or XML like Syntax
//JSX (transpiled before it reaches the JS) - PARCEL - Babel

//JSX => React.createElement =>  ReactElement => JS object => HTMLElement(render)

//Raect Element
const Title = () =>(
<h1 className="head">
  Namaste Raect using JSX
</h1>
)

// React Component
// class Based Components - OLD
// Functional Components - NEW

//Raect Functional Component 

// Component composition
const HeadingComponent = () =>(
   <div id="container">
    {Title()}
    <h1 className="heading">Hi Functional Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

