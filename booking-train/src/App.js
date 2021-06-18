import React, { useState } from 'react';
import TryHard from "./componets/TryHard.js";
import Form from "./componets/Form.js";
import './App.css';

function App() {
  const [render, renderStuff] = useState([]);
  const updateArray = values => {
    renderStuff([...render, values])
  }
  console.log(render);
  return (
    <div className="App">
      <Form updateArray={updateArray} />
      <TryHard render={render} />
    </div>
  );
}

export default App;
