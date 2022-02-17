import React from "react";
import "./footer.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>970.515.8586</li>
              <li>trivera51580@gmail.com</li>
              <li></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Social</h4>
            <ul className="list-unstyled">
    
                <a href="https://github.com/trivera777" target="_blank">
                  <GitHub
                    className="icon"
                    style={{ fontSize: "45px", color: "#fff" }}
                  />
                </a>
        
                <a href="https://www.linkedin.com/in/tifannyrivera/" target="_blank">
                  <LinkedIn
                    className="icon"
                    style={{ fontSize: "45px", color: "#fff" }}
                  />
                </a>
         
              <li></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Tifanny Rivera Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
