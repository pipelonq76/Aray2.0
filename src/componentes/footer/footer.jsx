import './footer.css';

function Footer() {
   return (
      <>
         <footer className='footer'>
            <div className='logo-container'>
            <img src='../../../public/imgs/logo2.png' alt="" className="logo" />
            </div>
            <div className="social-icons-container">
               <a href="https://www.facebook.com/?locale=es_LA" className="social-icon"><img src="" alt=""></img></a>
               <a href="https://www.instagram.com/?hl=es-es" className="social-icon"><img src="" alt=""></img></a>
               <a href="https://web.whatsapp.com/" className="social-icon"><img src="" alt=""></img></a>
               <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" className="social-icon"><img src="" alt=""></img></a>
            </div>
            <ul className="footer-menu-container">
               <li className="menu-item">Legal</li>
               <li className="menu-item">Cokies</li>
               <li className="menu-item">Privacidad</li>
               <li className="menu-item">Información</li>
               <li className="menu-item">Aray</li>
            </ul>
            <span className="copyright">&copy;2024,Derechos reservados ARAY</span>
         </footer>





      </>
   );
}
export default Footer;