import React from 'react';
import Header from './Header';

function Home() {
  return (
    <>
      <Header />
      <center>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5QzzeYHApV0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </center>

      <p>In this video, I will explain what full stack development is and provide a detailed overview of the technologies 
        used to build full stack web applications...</p>

      <p>I will begin by discussing the key technologies and programming languages...</p>

      <h3>Lets Divide Full stack into 3 parts</h3>
      <ul>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Database</li>
      </ul>

      <h2>Technologies Used for Full Stack Development</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Frontend</th>
            <th>Backend</th>
            <th>Database</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>HTML</td><td>Java</td><td>MongoDB</td></tr>
          <tr><td>CSS</td><td>Python</td><td>MySQL</td></tr>
          <tr><td>JavaScript</td><td>Node JS</td><td>AWS</td></tr>
        </tbody>
      </table>

      <hr />

      <center>
        <p>
          <a href="/register">Register for a Course</a> | 
          <a href="https://www.instagram.com/errormakesclever/"> Instagram </a> | 
          <a href="https://www.youtube.com/@ErrorMakesClever">Youtube</a>
        </p>
      </center>
    </>
  );
}

export default Home;
