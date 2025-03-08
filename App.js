import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// nested Element
// React.createElement(object) = HTML((Browser understands))

// const div = React.createElement("div", {id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am H1 Tag!")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div)

const div = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Riya"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
