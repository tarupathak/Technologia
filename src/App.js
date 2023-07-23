import React from "react";
import Navbar from "./Components/Navbar";
import bg from "./Assets/Bg-img.webp";
import "./App.css";
import img2 from "./Assets/img2.webp";
import clutch from "./Assets/clutch-logo.webp";
import icon from "./Assets/icon.svg";
import hands from "./Assets/hands.webp";
import grow from "./Assets/grow.webp";
import pic from "./Assets/pic.webp";
import picture from "./Assets/gg.webp";
import Card from "./Components/Card";
import Form from "./Components/Form";
import FooterOne from "./Components/FooterOne";
import Employee from "./Components/Employee";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <img src={bg} alt="bg-img" className="bg-img" />
      </div>
      <div id="abs-text">
        {" "}
        <div id="large-txt">Mobile app development for funded companies.</div>
        <div id="sml-txt">
          Helping companies succeed through customized software solutions
        </div>
      </div>
      <section className="center">
        <div id="txt">
          Experienced teams and a agile framework, we prioritise the commercial
          goals of the client to deliver the highest business value.
        </div>
        <div className="touch-btn1">
          <button>Why to choose us</button>
        </div>
      </section>
      <section className="center">
        <div className="img1">
          <img src={img2} alt="working-img" loading="lazy" />
        </div>
        <div className="img2">
          <img src={clutch} alt="clutch-logo-img" loading="lazy" />
          <div>Top-Notch Developers</div>
        </div>
      </section>
      <section>
        <p id="txt1">We provide clients with award-winning services</p>
        <div className="box">
          <div className="boxes">
            <img src={icon} alt="icon" />
            <div className="lar-txt">NFT Development</div>
            <div className="small-txt">
              Non Fundible Tokens are in Trend. We've been building them since
              2016.
            </div>
          </div>
          <div className="boxes">
            <img src={icon} alt="icon" />
            <div className="lar-txt">Mobile App Development</div>
            <div className="small-txt">
              From Social Media Apps like TikTok to fitness Tracking and
              Marketplaces.
            </div>
          </div>
          <div className="boxes">
            <img src={icon} alt="icon" />
            <div className="lar-txt">Web App Development</div>
            <div className="small-txt">
              Non Fundible Tokens are in Trend. We've been building them since
              2016.
            </div>
          </div>
          <div className="boxes">
            <img src={icon} alt="icon" />
            <div className="lar-txt">Software Development</div>
            <div className="small-txt">
              From a custom CRM to Transportation Management System, we've built
              it all.
            </div>
          </div>
        </div>
        <div className="blue-col">View all services</div>
        <div className="blue-line"></div>
      </section>
      <section className="center">
        <div id="txt3">Apps we built been trending on the App Store</div>
        <div id="app-trend">
          <span id="box1">
            <div className="top">
              <div>01.</div>
              <div>Showcase</div>
            </div>
            <div className="hori">
              <div>
                <div className="head">scuola</div>
                <div className="tail">
                  Convenience, savings and rewards at your fingertips
                </div>
              </div>
              <div>
                <img src={hands} alt="hands" />
              </div>
            </div>
            <div className="bottom">
              <div>Lounge Project</div>
              <div>Arrow</div>
            </div>
          </span>
          <span id="box2">
            <div className="top">
              <div>02.</div>
              <div>Showcase</div>
            </div>
            <div className="hori">
              <div>
                <div className="head">JOLIE</div>
                <div className="tail">
                  Private trust management and trading platform
                </div>
              </div>
              <div>
                <img src={grow} alt="hands" />
              </div>
            </div>
            <div className="bottom">
              <div>Lounge Project</div>
              <div>Arrow</div>
            </div>
          </span>
        </div>

        <div id="box3">
          <div className="top">
            <div>03.</div>
            <div>Showcase</div>
          </div>
          <div className="hori">
            <div>
              <div className="head">Skole</div>
              <div className="tail">Online platform for distance learning</div>
            </div>
            <div>
              <img src={pic} alt="hands" />
            </div>
          </div>
          <div className="bottom">
            <div>Lounge Project</div>
            <div>Arrow</div>
          </div>
        </div>
        <div className="blue-col">View all services</div>
        <div className="blue-line"></div>
      </section>
      <section className="center1">
        <div className="divi1">
          <div className="one">
            <div className="head1">Organizations recognized our work</div>
            <div className="inner">
              <div>Forbes</div>
              <div>Google</div>
              <div>Clutch</div>
            </div>
            <div className="touch-btn1">
              <button>View more awards</button>
            </div>
          </div>
          <div className="three">
            <div className="head2">
              Tecnologia has been recognized as a Leader in the 2022 Gartner®
            </div>
            <div className="flex-box">
              <span>JavaScript</span> <span>NodeJS</span>{" "}
              <span>TypeScript</span> <span>React</span> <span>Swift</span>{" "}
              <span>Java</span> <span>Objective-C</span> <span>RxJava</span>
            </div>
          </div>
        </div>
        <div className="divi1">
          <div className="two">
            <div className="head2">
              Tecnologia has been recognized as a Leader in the 2022 Gartner®
            </div>
            <div>
              <div className="blue-col">View all services</div>
              <div className="blue-line"></div>
            </div>
          </div>
          <div className="four">
            <div className="head1">Organizations recognized our work</div>
            <div className="round-img">
              <img src={picture} alt="picture" />
            </div>
            <div className="touch-btn1">
              <button>View more awards</button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-sec">
        <div className="head3">Mobile app development for funded companies</div>
        <div className="line"></div>
        <div className="flex3">
          <div className="flex4">
            <div className="big">10 Years</div>
            <div className="small">in business</div>
          </div>
          <div className="flex4">
            <div className="big">7+ Years</div>
            <div className="small">in app development</div>
          </div>
          <div className="flex4">
            <div className="big">10+ Startups</div>
            <div className="small">unicorns built</div>
          </div>
          <div className="flex4">
            <div className="big">#1 Development</div>
            <div className="small">company in USA</div>
          </div>
          <div>
            <button className="touch-btn5">Get in touch</button>
          </div>
        </div>
      </section>
      <section>
        <div className="head8">Meet some of our 80+ team members</div>
        <div>
          <div className="blue-col">View all team</div>
          <div className="blue-line"></div>
        </div>
        <div className="flex-sec1">
          {" "}
          <Employee />
        </div>
      </section>
      <section>
        <div className="head4">Latest Insight</div>
        <div className="flex-sec1">
          <Card />
        </div>
      </section>
      <section className="center">
        <Form />
      </section>
      <section>
        <FooterOne />
      </section>
    </div>
  );
}

export default App;
