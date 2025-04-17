import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Body></Body>
    </div>
  );
};

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(App());
