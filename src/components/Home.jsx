import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

import HomeImage from "../assets/images/home_page_img.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/harsh-sojitra-a47809204/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/harshsojitra007"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:harsh.sojitra.49@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <EmailRoundedIcon />
            </a>
          </div>

          <div className="home__wrapper">
            <div className="home__wrapper__2">
              <div className="home__data">
                <h1 className="home__title">Hi, I'm Harsh</h1>
                <h3 className="home__subtitle">Full-Stack Developer Enthusiasist</h3>
                <p className="home__description">
                  A full-stack developer enthusiasist working with ReactJs, NodeJs, SQL/NoSql Databases, ExpressJs, Java, Spring and having proficiency in Web-Development. Checkout my latest projects for more information about by technicalities.
                </p>
                <a href="#contact" className="button home__contact__button button--flex">
                  Contact Me
                  <SendRoundedIcon className="button__icon" />
                </a>
              </div>

              <div className="home__img">
                <svg className="home__blob" viewBox="0 0 200 187">
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      x={12}
                      y={12}
                      className="home__blob-img"
                      href={HomeImage}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                Scroll Down
                <KeyboardDoubleArrowDownRoundedIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
