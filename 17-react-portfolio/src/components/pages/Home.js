import React from "react";
import '../../style.css';


function Home() {

  // const projects = {
  //   title: "Pika-Choose! - Group Project #2",
  //   image: "../../images/pokemon.JPG",
  //   description: "Works as a team buidler for Pokemon teams using a SQL database.",
  //   skills: "mySQL, handlebars, Heroku Deployment, GitHub",
  //   contributions: "Frontend development (HTML, JS, CSS), Handlebars, Heroku Deployment, Design",
  //   projectURL: "https://protected-spire-30180.herokuapp.com/",
  //   repoURL: "https://github.com/ZanderMate/teamikea"
  // }



  return (




    <div id="portfolio-text">
      <h2>Portfolio</h2>

{/* 
      <div className="card">
        {projects.map(item => (
          <div>
          <h5>{item.title}</h5>
          <img src={item.image} className="portfolio-image" alt="Pika-Choose Application"></img>
          <p>Description: {item.description}</p>
          <p><i>Skills Strengthened: {item.skills}</i></p>
          <p>Contributions: {item.contributions}</p>
          <a href="{item.projectURL}" target="_blank" className="btn btn-primary portfolio-btn">View Project</a>
          <a href="{item.repoURL}" target="_blank" className="btn btn-primary portfolio-btn">View Repository on GitHub</a>
          </div>
    ))}
      </div> */}













      <div className="card">
        <h5>Pika-Choose! - Group Project #2</h5>
        <img src={"/portfolio/images/pokemon.jpg"} className="portfolio-image" alt="Pika-Choose Application"></img>
        <p>Description: Works as a team buidler for Pokemon teams using a SQL database.</p>
        <p><i>Skills Strengthened: mySQL, handlebars, Heroku Deployment, GitHub</i></p>
        <p>Contributions: Frontend development (HTML, JS, CSS), Handlebars, Heroku Deployment, Design</p>
        <a href="https://protected-spire-30180.herokuapp.com/" target="_blank" className="btn btn-primary portfolio-btn">View Project</a>
        <a href="https://github.com/ZanderMate/teamikea" target="_blank" className="btn btn-primary portfolio-btn">View Repository on GitHub</a>
      </div>
      <div className="card">
        <h5>Global Eats - Group Project #1</h5>
        <img src={"/portfolio/images/project.png"} className="portfolio-image" alt="Global Eats Application"></img>
        <p>Description: Food and drink recipe generator based on user selection</p>
        <p><i>Skills Strengthened: API/AJAX calls, Github Conflict Resolution</i></p>
        <p>Contributions: Backend development, javaScript, Design</p>
        <a href="https://kaykuhl.github.io/project-1/html" target="_blank" className="btn btn-primary portfolio-btn">View Project</a>
        <a href="https://github.com/kaykuhl/project-1" target="_blank" className="btn btn-primary portfolio-btn">View Repository on GitHub</a>
      </div>
      <div className="card">
        <h5>Weather Dashboard Application</h5>
        <img src={"/portfolio/images/weather-dashbaord.png"} className="portfolio-image" alt="Weather Dashboard Application"></img>
        <p>Description: Displays the current weather and 5-day forcast of a searched city</p>
        <p><i>Skills Strengthened: API/AJAX Calls, On-click Events, Local Storage</i></p>
        <a href="https://kaykuhl.github.io/06-weather-dashboard" target="_blank" className="btn btn-primary portfolio-btn">View Project</a>
        <a href="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/06-weather-dashboard" target="_blank" className="btn btn-primary portfolio-btn">View Repository on GitHub</a>
      </div>
      <div className="card">
        <h5>Quiz Game Application</h5>
        <img src={"/portfolio/images/quiz-game.png"} className="portfolio-image" alt="Quiz Game Application"></img>
        <p>Description: Quiz game that scores points based on correct answers and time remaining</p>
        <p><i>Skills Strengthened: Timer (Interval) function, On-click Events</i></p>
        <a href="https://kaykuhl.github.io/04-quiz-game" target="_blank" className="btn btn-primary portfolio-btn">View Project</a>
        <a href="https://github.com/kaykuhl/kaykuhl.github.io/tree/master/04-quiz-game" target="_blank" className="btn btn-primary portfolio-btn">View Repository on GitHub</a>
      </div>
    </div>
  );
}

export default Home;
