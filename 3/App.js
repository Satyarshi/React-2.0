import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>This is title</h1>;

const Heading = () => (
  <div>
    <Title />
    <h2>This is heading</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
