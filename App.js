import React from "react";
import  ReactDOM  from "react-dom/client";


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},React.createElement("h1",{},"This is a Namaste React"),React.createElement("h2",{},"I am an h2 Tag"))] ,
[   React.createElement("div",{id:"child2"},React.createElement("h1",{},"By Riya"),React.createElement("h2",{},"I am an Child2 h2 Tag"))])

console.log(parent);//object


// const heading = React.createElement("h1", {id:"heading", ab :"riya"}, "Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)