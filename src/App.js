import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [name, setName] = useState();
  const [fullName, setFullname] = useState();

  const changeEvent = event => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullname(name);
  };

  return (
    <>
      <div>
        <h1> Hello {fullName} </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={changeEvent}
          input={name}
        />
        <button onClick={onSubmit}> Click Me </button>
      </div>
    </>
  );
};

export default App;
