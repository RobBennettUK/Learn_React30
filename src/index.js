import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

console.log(fruits);
// Spread Operator
// Using the three ...Array, spread out the individual items from that array and added it to the array I am typing
// This can also be used with operators:

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};

console.log(user);

// This is different to if we didn't use the spread operator
// Here the result is nested

const user2 = {
  fullName,
  id: 1,
  username: "jamesbond007"
};

console.log(user2);
