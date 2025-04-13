const head = React.createElement("h1", {class: "heading"}, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
// const test= document.createElement('h1').innerText("test")
// root.render(test)
root.render(head);
console.log(React);
console.log(ReactDOM);