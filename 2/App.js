import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React !!!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "I am heading 1"),
    React.createElement("h2", {}, "I am heading 2"),
  ])
);

// below is the structure of above code and if we have to give multiple children then we put it in array

{
  /* <div id="parent">
  <div id="children">
    <h1>I am heading 1</h1>
    <h2>I am heading 2</h2>
  </div>
</div>; */
}

console.log(heading); // It is a object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
