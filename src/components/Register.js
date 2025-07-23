import React from 'react';
import Header from './Header';

function Register() {
  return (
    <>
      <Header />
      <center>
        <hr />
        <h2>Registration Form</h2>
        <form style={{ maxWidth: "400px", textAlign: "left" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name:</label><br />
            <input type="text" style={{ width: "100%" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Age:</label><br />
            <input type="number" style={{ width: "100%" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Gender:</label><br />
            <input type="radio" name="gender" /> Male{' '}
            <input type="radio" name="gender" /> Female
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label><br />
            <input type="email" style={{ width: "100%" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Select a Course:</label><br />
            <select style={{ width: "100%" }}>
              <option>Full Stack Development</option>
              <option>Java Programming</option>
              <option>Python</option>
              <option>Data Analyst</option>
            </select>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Upload your Resume:</label><br />
            <input type="file" />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input type="reset" />{' '}
            <input type="submit" />
          </div>
        </form>

        <hr />
        <p>
          <a href="/">Home</a> | 
          <a href="https://www.instagram.com/errormakesclever/"> Instagram </a> | 
          <a href="https://www.youtube.com/@ErrorMakesClever">Youtube</a>
        </p>
        <hr />
      </center>
    </>
  );
}

export default Register;
