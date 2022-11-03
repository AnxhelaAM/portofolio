import "./Footer.scss"

export default function Footer() {
  return (
    <div className="footer" id="footer">
     <div className="first">
        <h1 className="first-title">Anxhela Murthi</h1> 
        A freelancer web designer and web developer locatied in Tirana,Albania.
        I design modern websites that have a good performance rate.
     </div>
     <div className="middle">
       <h1 className="middle-title">Contact Info</h1>
       <ul className="middle-list">
         <li>+355 682682970</li>
         <li>anxhela.murthi451@gmail.com</li>
         <li>Located in:Tirana,Albania</li>
       </ul>
     </div>
      <div className="last">
        <h1 className="last-title">Social Medias</h1>
        <ul className="last-list">
          <li><a href="#">Facebook</a></li>
         <li><a href="#">Instagram</a></li>
         <li><a href="#">Twitter</a></li>
       </ul>
      </div>
    </div>
  )
}
