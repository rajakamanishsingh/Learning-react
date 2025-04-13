import React from "react";
import ReactDOM from "react-dom/client";
// creating element using react.createElement method
// const head = React.createElement("div", {}, "hello from react");

// creating element using JSX syntax
// const heading = <div tagindex="5">Hello from JSX</div>;
// bable will convert the above code into the below code
// const heading = React.createElement("div", { tagindex: "5" }, "Hello from JSX");
// React components
// function component
const Heading = () => {
  return <div>Hello from functional component 1</div>;
};
const Heading2 = () => <div>Hello from functional component 2</div>;
const Component_Composition = () => {
  return (
    <div>
      <Heading />
      <Heading2 />
    </div>
  );
};
// bable will convert the above code into the below code
// const Component_Composition = () => {
//   return React.createElement("div", {}, [React.createElement(Heading), React.createElement(Heading2)]);
// };

console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component_Composition />);
