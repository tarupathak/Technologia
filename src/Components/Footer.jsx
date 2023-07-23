import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr style={{ width: "90vw" }} />
      <div id="footerBox">
        <div>
          <h2>Solutions</h2>
          <ul>
            <li>NFT Development</li>
            <li>Mobile App Development</li>
            <li>Web App Development</li>
            <li>Software Development</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: "white" }}>Solutions</h2>
          <ul>
            <li>Android Development</li>
            <li>IOS Development</li>
            <li>Staff augmentation</li>
            <li>Hybrid App Development</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>About us</li>
            <li>Team</li>
            <li>Partners & Certificates</li>
            <li>Revies & Awards</li>
          </ul>
        </div>
        <div>
          <h2>Resources</h2>
          <ul>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Events</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2>Join us</h2>
          <ul>
            <li>Careers</li>
            <li>Open Positions</li>
            <li>
              <button>We are hiring</button>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ width: "90vw" }} />
      <div>
        <div id="footerBottomStart">
          <p>© 2023 Tecnologia</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
