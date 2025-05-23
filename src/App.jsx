import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App-container">
      <section className="HomePage">
        <h1>Hi I'm Camille, </h1>
        <p>I'm a Computer Science student that likes to build cool things!</p>
        <p>Connect with me here</p>
      </section>

      <section className="Projects">
        <h2>Projects</h2>
        <p>Here are some of my projects</p>
        <div className="project-grid">
          <div className="card">
            <h3>Project 1</h3>
            <p>Project 1 description</p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>Project 2 description</p>
          </div>
          <div className="card">
            <h3>Project 3</h3>
            <p>Project 3 description</p>
          </div>
          <div className="card">
            <h3>Project 4</h3>
            <p>Project 4 description</p>
          </div>
        </div>
      </section>

      <section className="Experience">
        <h2>Experience</h2>
        <p>Here are some of my experiences</p>
        <div classNam="experience-list">
          <div className="card">
              <h3>Project 1</h3>
              <p>Project 1 description</p>
            </div>
            <div className="card">
              <h3>Project 2</h3>
              <p>Project 2 description</p>
            </div>
            <div className="card">
              <h3>Project 3</h3>
              <p>Project 3 description</p>
            </div>
            <div className="card">
              <h3>Project 4</h3>
              <p>Project 4 description</p>
            </div>
        </div>
      </section>

      <section className="Skills">
        <h2>Skills</h2>
        <p>Here are some of my skills</p>
        <div className="skills-list">
          <div className="card">
            <h3>Skill 1</h3>
            <p>Skill 1 description</p>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
          <div className="card">
            <h3>Skill 2</h3>
            <p>Skill 2 description</p>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
          <div className="card">
            <h3>Skill 3</h3>
            <p>Skill 3 description</p>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="Education">
        <h2>Education</h2>
        <div className="card">
            <h3>Education</h3>
            <p>Education Details</p>
          </div>
      </section>

      <section className="Contact">
        <h2>Contact</h2>
        <p>Here is my contact information</p>
      </section>
    </div>
  )
}

export default App
