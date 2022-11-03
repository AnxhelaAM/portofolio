import { useState } from "react";
import "./Contact.scss";
import Skills from "../Skills";
export default function ContactMe() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <h1 id="contactme">CONTACT  ME</h1>
      <h2 id="getIntouch">You want a  website for your bussines?Send me an email.</h2>
     <div className="back">
       <div className="left">
         <div className="skillsContainer">
           <h2 id="skills-title">My skills</h2>
           <Skills skill={'Html'} progress={'90%'} width={'90%'} />
           <Skills skill={'Css'} progress={'80%'} width={'80%'} />
           <Skills skill={'Javascript'} progress={'50%'} width={'50%'} />
           <Skills skill={'React Js'} progress={'50%'} width={'50%'} />
           <Skills skill={'Java'} progress={'40%'} width={'40%'} />
           <Skills skill={'R'} progress={'45%'} width={'45%'} />
         </div>
       </div>
       <div className="right">
         <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Name" />
           <input type="text" placeholder="Surname" />
           <input type="text" placeholder="Email" />
           <textarea placeholder="Message"></textarea>
           <button type="submit">Send</button>
           {message && <span> Thank you for your message!I'll reply soon.</span>}
          </form>
       </div>
     </div>
    </div>
  );
}