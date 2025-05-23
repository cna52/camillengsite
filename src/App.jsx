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
            <h3>Brain Tumor Segmentation using SAM</h3>
            <p>Fine-tuned Meta’s SAM on MRI data with prompt engineering and dynamic training strategies to improve segmentation accuracy.</p>
          </div>
          <div className="card">
            <h3>Knight Club</h3>
            <p>Multiplayer game using Python sockets and Pygame with real-time communication and object-locking mechanisms.</p>
          </div>
          <div className="card">
            <h3>CalcQuest</h3>
            <p>Interactive math game built in React, styled with Tailwind CSS, and deployed using Docker for learning reinforcement.</p>
          </div>
          <div className="card">
            <h3>GameState Reflex</h3>
            <p>Project at SFU Robot Soccer Club improving real-time strategy decisions and robot responsiveness with UI overhaul.</p>
          </div>
        </div>
      </section>

      <section className="Experience">
        <h2>Experience</h2>
        <p>Here are some of my experiences</p>
        <div className="experience-list">
          <div className="card">
            <h3>Software Head Developer, SFU Robot Soccer Club</h3>
            <p>Led real-time strategy system development and UI improvements for robot soccer matches.</p>
          </div>
          <div className="card">
            <h3>Computer Science Peer Educator, SFU</h3>
            <p>Mentored students on CS fundamentals and provided help desk-style support in programming and math concepts.</p>
          </div>
          <div className="card">
            <h3>Co-Director of Partnership, GDSC SFU</h3>
            <p>Secured speakers and sponsorships through outreach and coordinated event planning with co-directors.</p>
          </div>
          <div className="card">
            <h3>HIVE Leader, SFU</h3>
            <p>Led new student groups through campus tours and social events, and engaged them on forums to support their transition.</p>
          </div>
          <div className="card">
            <h3>Note Taker, Center for Accessible Learning, SFU</h3>
            <p>Provided enhanced class notes with step-by-step explanations for CMPT 210 to aid students with accommodations.</p>
          </div>
          <div className="card">
            <h3>HIVE Logistics Volunteer, SFU</h3>
            <p>Helped coordinate Welcome Day, guided attendees, and offered advice to new CS students on university life.</p>
          </div>
          <div className="card">
            <h3>Sales Associate, Banana Republic</h3>
            <p>Delivered excellent customer service, performed safety inspections, and ensured smooth daily operations in retail.</p>
          </div>
        </div>
      </section>

      <section className="Skills">
        <h2>Skills</h2>
        <p>Here are some of my skills</p>
        <div className="skills-list">
          <div className="card">
            <h3>Languages</h3>
            <p>Proficient in various programming languages</p>
            <ul>
              <li>Java, Python, C/C++, JavaScript</li>
              <li>HTML, CSS</li>
            </ul>
          </div>
          <div className="card">
            <h3>Frameworks & Tools</h3>
            <p>Experienced with popular dev tools</p>
            <ul>
              <li>React, Node.js, Flask</li>
              <li>Tailwind CSS, WebStorage API</li>
              <li>Git, Docker, VS Code</li>
            </ul>
          </div>
          <div className="card">
            <h3>IT & Support</h3>
            <p>Strong troubleshooting and technical communication</p>
            <ul>
              <li>Network & user account support</li>
              <li>Printer and AV setup</li>
              <li>Problem solving & help desk skills</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="Education">
        <h2>Education</h2>
        <div className="card">
          <h3>Simon Fraser University</h3>
          <p>Bachelor of Science in Computer Science (2023 – Present)</p>
        </div>
        <div className="card">
          <h3>Burnaby North Secondary School</h3>
          <p>High School Diploma (2018 – 2023)</p>
        </div>
      </section>

      <section className="Contact">
        <h2>Contact</h2>
        <p>Here is my contact information</p>
        <p>Email: cna52@sfu.ca</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/camille-ng-767a85326/">linkedin.com/in/camille-ng</a></p>
        <p>GitHub: <a href="https://github.com/cna52">github.com/cna52</a></p>
      </section>
    </div>
  )
}

export default App
