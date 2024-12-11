import React from "react";
import ReactDOM from "react-dom/client"



function App(){
  return (
    <div>
      <Pizza/>
      <h1>Hello World</h1>
    </div>
  )
}

function Pizza(){
  return (
    <div>
      <h1>Pizza is a good world</h1>
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App/>


);