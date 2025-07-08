import { Link } from "react-router-dom";
import "./footer.css";
import fbIcon from "../../assets/logos/fb.svg";
import githubIcon from "../../assets/logos/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <nav className="footer__links">
          <div className="footer__text-links">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__icon-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={fbIcon} alt="Facebook" className="footer__icon" />
            </a>
          </div>
        </nav>
        <p className="footer__powered-by">
          © 2024 Supersite, Powered by News API
        </p>
      </div>
    </footer>
  );
};

export default Footer;
