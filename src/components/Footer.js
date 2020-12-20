import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <p className="text-copyright">
          <span>
            <a href="https://github.com/peteriscaurs/burtu-juceklis">
              <i className="fa fa-code"></i>
            </a>{" "}
            by{" "}
          </span>
          <strong>Pēteris Čaurs </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
