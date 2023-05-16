import React from "react";

import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";

import ReactLogo from "../assets/images/react__logo.png";
import CssLogo from "../assets/images/css__logo.png";
import HtmlLogo from "../assets/images/html__logo.png";
import JsLogo from "../assets/images/js__logo.png";

import { Button } from "@mui/material";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Development Skills</span>

      <div className="projects__outer">
        <div className="project__box">
          <div className="project__title">
            <p>Portfolio</p>
          </div>

          <div className="project__description">
            <p>
              A static SPA built using React, HTML and CSS to showcase my
              programming skills and technical abilities.
            </p>
          </div>

          <div className="view__more__button__outer">
            <Button
              variant="text"
              className="view__more__button"
              endIcon={<KeyboardDoubleArrowRightRoundedIcon />}
            >
              View More
            </Button>
          </div>

          <div className="technologies__title__outer">
            <div className="technologies__title">Technologies Used</div>
          </div>

          <div className="tech__stack__outer">
            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={ReactLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">ReactJs</div>
            </div>

            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={CssLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">
                CSS3
              </div>
            </div>

            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={HtmlLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">
                HTML5
              </div>
            </div>

            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={JsLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">
                JS
              </div>
            </div>
          </div>

          <div className="external__links">
            <Button href="">Github</Button>
            <Button>Live</Button>
          </div>
        </div>

        <div className="project__box">
          <div className="project__title">
            <p>CodeStudy</p>
          </div>

          <div className="project__description">
            <p>
              A static SPA built using React, HTML and CSS to showcase my
              programming skills and technical abilities.
            </p>
          </div>

          <div className="view__more__button__outer">
            <Button
              variant="text"
              className="view__more__button"
              endIcon={<KeyboardDoubleArrowRightRoundedIcon />}
            >
              View More
            </Button>
          </div>

          <div className="technologies__title__outer">
            <div className="technologies__title">Technologies Used</div>
          </div>

          <div className="tech__stack__outer">
            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={ReactLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">ReactJs</div>
            </div>

            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={CssLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">
                CSS3
              </div>
            </div>

            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={HtmlLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">
                HTML5
              </div>
            </div>

            <div className="single__stack__outer">
              <div className="stack__image__div">
                <img
                  src={JsLogo}
                  alt="tech__stack__img"
                  className="stack__image"
                />
              </div>
              <div className="stack__name">
                JS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
