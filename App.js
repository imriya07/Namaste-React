import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement = ReactElement - JS Object = HTMLElement
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);
// const ele = <span>I am Span</span>
//Jsx = HTML-like or XML-like syntax
//Jsx(transpiled before it recahes the JS) - parcel - Babel
// JSx = Babel transpiles it to React.createElement = RecatElement - JS Object = HTMLElement(render)
//React Element
const Title =()=>(
  <h1 className="head" tabIndex="5">
    {/* {ele} */}
    Namaste React using jsx
  </h1>
);

//React Component
// Class Based Componenet - Old
// Functional Componenet - New

//React Functional Component
//Componenet composition
const HeadingComponent = ()=>(
    <div id="container">
        {Title()}
        <Title></Title>
        <Title/>
    <h1 className="heading">Namaste React Functional Componenet</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
