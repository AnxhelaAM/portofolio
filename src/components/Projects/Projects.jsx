import "./Projects.scss"


const Projects = () => {
  return (
      <div className="projects" id="projects">
          <div className="heading">
              <h1 className="works">My Projects</h1>
              <h2 className="project-heading">Check Out My Recent Work</h2>
              <div className="projects__section">
                 <div className="cards">
                      <a href="https://github.com/AnxhelaAM/TipCalculator">
                         <img src="/images/tipcalculator.png" alt="tipcalculator"></img>
                         <button>See Work</button>
                       </a>
                  </div>

                  <div className="cards">
                      <a href="https://github.com/AnxhelaAM/DiceGame">
                         <img src="/images/dicegame.png" alt="dicegame"></img>
                         <button>See Work</button>
                       </a>
                  </div>
                  <div className="cards">
                        <a href="https://github.com/AnxhelaAM/react-calculator">
                         <img src="/images/calculator.png" alt="calculator"></img>
                          <button>See Work</button>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Projects

