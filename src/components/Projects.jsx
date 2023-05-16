import React, { forwardRef, useState } from "react";

import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import ReactLogo from "../assets/images/react__logo.png";
import CssLogo from "../assets/images/css__logo.png";
import HtmlLogo from "../assets/images/html__logo.png";
import JsLogo from "../assets/images/js__logo.png";
import NodeJsLogo from "../assets/images/nodejs__logo.png";
import MongoDBLogo from "../assets/images/mongodb__logo.png";
import MaterialUILogo from "../assets/images/mui__logo.png";
import ReduxLogo from "../assets/images/redux__logo.png";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Projects = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});

  return (
    <section className="projects section" id="projects">
      <div className="m-t-4">
        <Dialog
          maxWidth={"md"}
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpenDialog(false)}
        >
          <DialogTitle className="detailed__project__title">
            {projectDetails?.title}
          </DialogTitle>

          <DialogContent>
            {projectDetails?.description?.map((desc) => (
              <div className="detailed__project__description__outer">
                <VerifiedRoundedIcon className="color__primary" />
                <p className="detailed__project__description">{desc}</p>
              </div>
            ))}
          </DialogContent>

          {projectDetails?.technicalChallenges?.length && (
            <DialogContent dividers>
              <div className="technical__challenges__title">
                Technical Challenges
              </div>
              {projectDetails?.technicalChallenges?.map((desc) => (
                <div className="detailed__project__description__outer">
                  <VerifiedRoundedIcon className="color__primary" />
                  <p className="technical__challenges__p">{desc}</p>
                </div>
              ))}
            </DialogContent>
          )}

          <DialogActions>
            <Button
              className="external__links__live__button width__max__content"
              onClick={() => setOpenDialog(false)}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

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
                onClick={() => {
                  setProjectDetails({
                    title: "Portfolio",
                    description: [
                      `A static SPA built using React, HTML and CSS to showcase my
                    programming skills and technical abilities.`,

                      `Portfolio consists of my education background, technical skills,
                    project information and my contact details.`,
                    ],
                  });
                  setOpenDialog(true);
                }}
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
                <div className="stack__name">CSS3</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={HtmlLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">HTML5</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={JsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">JS</div>
              </div>
            </div>

            <div className="external__links">
              <Button
                variant="text"
                target="_blank"
                className="external__links__github__button"
                disableElevation
                href="https://github.com/harshsojitra007/portfolio"
              >
                Github
              </Button>
              <Button
                variant="text"
                target="_blank"
                className="external__links__live__button"
                disableElevation
                href="https://react-portfolio-harsh.vercel.app/"
              >
                Live
              </Button>
            </div>
          </div>

          <div className="project__box">
            <div className="project__title">
              <p>CodeStudy</p>
            </div>

            <div className="project__description">
              <p>
                MERN stack based application for sharing educational resources
                online and provides a community forum to ask and solve doubts.
              </p>
            </div>

            <div className="view__more__button__outer">
              <Button
                onClick={() => {
                  setProjectDetails({
                    title: "CodeStudy",
                    description: [
                      `MERN stack based application for sharing educational resources
                    online and provides a community forum to ask and solve doubts.`,

                      `Users are allowed to upload images and pdf's as resources and can also
                    ask doubts on community forum.`,

                      `A user can view others' doubts and can reply also. Rich text editor is also provided for highlighting purpose and better user experience.`,
                    ],
                    technicalChallenges: [
                      `To store images and pdf documents we've used cloudinary which return a public URL of the document uploaded and saves document securely.`,

                      `Redux is used for state management and persistent. createApi (from redux toolkit) is used to define endpoints of backend and use them as functional hooks to make a request to the backend server.`,

                      `Privacy and security are the major concerns nowadays. To provide better security Email verification is used for registration.`,

                      `JWT token is used for authenctication and security enhancement.`,
                    ],
                  });
                  setOpenDialog(true);
                }}
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
                    src={MongoDBLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">MongoDB</div>
              </div>

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
                    src={NodeJsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">NodeJs</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={MaterialUILogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">MaterialUI</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={HtmlLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">HTML5</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={JsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">JS</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={ReduxLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">Redux</div>
              </div>
            </div>

            <div className="external__links">
              <Button
                variant="text"
                target="_blank"
                className="external__links__github__button"
                disableElevation
                href="https://github.com/DAKSHAY111/MATERIAL-SHARING-DISCUSSION-FORUM"
              >
                Github
              </Button>
              <Button
                variant="text"
                target="_blank"
                className="external__links__live__button"
                disableElevation
                href="https://harshsojitra007.github.io/CodeStudy/"
              >
                Live
              </Button>
            </div>
          </div>

          <div className="project__box">
            <div className="project__title">
              <p>Connectify</p>
            </div>

            <div className="project__description">
              <p>
                MERN stack based application to connect to other peoples
                socially. Adding more friends, chatting with friends and sharing
                posts are the availabale features of Web-Application.
              </p>
            </div>

            <div className="view__more__button__outer">
              <Button
                onClick={() => {
                  setProjectDetails({
                    title: "Connectify",
                    description: [
                      `MERN stack based application to connect to other peoples socially.
                    Adding more friends, chatting with friends and sharing posts are
                    the availabale features of Web-Application.`,

                      `A user can add friends, remove friends, share a post, react to a post, comment on a post, remove a post of their own and chat with their friends.`,
                    ],
                    technicalChallenges: [
                      `To achieve security, JWT token and Email verification is used. Post images are stored in cloudinary.`,

                      `On a social media platform privacy is more concerned and that's why in our platform only a friend can message to other friend and not to strangers.`,
                    ],
                  });
                  setOpenDialog(true);
                }}
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
                    src={MongoDBLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">MongoDB</div>
              </div>

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
                    src={NodeJsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">NodeJs</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={MaterialUILogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">MaterialUI</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={HtmlLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">HTML5</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={JsLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">JS</div>
              </div>

              <div className="single__stack__outer">
                <div className="stack__image__div">
                  <img
                    src={ReduxLogo}
                    alt="tech__stack__img"
                    className="stack__image"
                  />
                </div>
                <div className="stack__name">Redux</div>
              </div>
            </div>

            <div className="external__links">
              <Button
                variant="text"
                target="_blank"
                className="external__links__github__button"
                disableElevation
                href="https://github.com/harshsojitra007/SocialMedia-MERN"
              >
                Github
              </Button>
              <Button
                variant="text"
                target="_blank"
                className="external__links__live__button"
                disableElevation
                href="#nowhere"
              >
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
