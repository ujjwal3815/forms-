import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    emailID: '',
    pnum: '',
    qual: '',
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    //const value = event.target.value;
    //const name = event.target.name;

    const {value,name} = event.target;

    setFullName((prevValue) => {

      return {
        ...prevValue,
        [name] : value,
      }
      //console.log(prevValue.fName)
      //if (name === 'fName') {
      // return {
      //fname: value,
      // lname: prevValue.lname,
      // emailID: prevValue.emailID,
      // pnum : prevValue.pnum,
      // };
      // } else if (name === 'lName') {
      //return {
      //  fname: prevValue.fname,
      //  lname: value,
      //  emailID: prevValue.emailID,
      //   pnum : prevValue.pnum,
      //  };
      // }  else if (name === 'eMail') {
      // return {
      // fname: prevValue.fname,
      // lname: prevValue.lname,
      // emailID: value,
      // pnum : prevValue.pnum,
      // };
      // }  else if (name === 'pNum') {
      // return {
      // fname: prevValue.fname,
      // lname: prevValue.lname,
      // emailID: prevValue.emailID,
      // pnum : value,
      // };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert('form submitted');
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname}
              {fullName.lname}
            </h1>
            <h2> {fullName.emailID}</h2>
            <p> {fullName.pnum} </p>
            <p> {fullName.qual} </p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <input
              type="email"
              placeholder="Enter Your Email ID"
              name="emailID"
              onChange={inputEvent}
              value={fullName.emailID}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              name="pnum"
              onChange={inputEvent}
              value={fullName.pnum}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your qualification"
              name="qual"
              onChange={inputEvent}
              value={fullName.qual}
            />
            <button type="submit"> Click Me </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
