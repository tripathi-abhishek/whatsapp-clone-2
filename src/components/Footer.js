import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <a className="" href="https://github.com/tripathi-abhishek">
          <GitHubIcon className="github__logo" />
        </a>
        <h3>Made with ❤ using React</h3>
      </div>
    </div>
  );
}

export default Footer;
