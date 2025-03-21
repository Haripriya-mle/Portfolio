import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename">Haripriya</h3>
        <p>Building intelligent solutions with AI & ML.</p>
        <div className="social-links d-flex justify-content-center">
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-skype"></i></a>
          <a href="https://linkedin.com/in/haripriyakh">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">Haripriya K H</strong> <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by <a href="#">Haripriya</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
