import "./Intro.scss"

export default function Intro() {
  return (
   <div className="intro"  id="intro">
     <div className="left">
       <div className="image">
         <img src="/images/foto1.jpeg" alt="me"></img>
       </div>
     </div>
     <div className="right">
       <div className="wrapper">
         <h1>Hello ,I'm</h1>
         <h1>Anxhela Murthi</h1>
         <h2 id="front">A front-end developer</h2>
         <div className="resume">
            <a href='/images/resume.pdf' download='/images/resume.pdf'>
              <button className="button">Get Resume</button>
            </a>
         </div>
       </div>
     </div>
  </div>
  )
}
