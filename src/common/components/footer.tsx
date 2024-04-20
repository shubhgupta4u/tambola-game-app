import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter , faGoogle, faInstagram,faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'


export function Footer() {

    return (
        <div className="footer">
        
          <footer className="bg-dark text-center text-white">
     
          <div className="container p-4 pb-0">
          
            <section className="mb-4">
       
              <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.facebook.com/shubh.gupta.142" role="button">
                 <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://twitter.com/" role="button">
                 <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.google.com/" role="button">
                 <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.instagram.com/" role="button">
                 <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/shubh-gupta-63607313/" role="button">
                 <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/shubhgupta4u" role="button">
                 <FontAwesomeIcon icon={faGithub} />
              </a>
          </section>
          </div>       
       
          <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}} >
            © 2024 Copyright: {"\u00A0"} Shubh Gupta
          </div>
         
        </footer>
          
        </div>
    );
}