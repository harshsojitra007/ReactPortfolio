import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer__main">
        <div className="footer__info">
          <a href="/" className="nav__logo">
            Harsh Sojitra
          </a>

          <div className="navigation__assistant">
            <a href="#home" className="nav__link fs-md">Home</a>
            <a href="#about" className="nav__link fs-md">About</a>
            <a href="#skills" className="nav__link fs-md">Skills</a>
            <a href="#projects" className="nav__link fs-md">Projects</a>
            <a href="#coding-profile" className="nav__link fs-md">Coding Profiles</a>
            <a href="#contact" className="nav__link fs-md">Contact</a>
          </div>

          <div className="footer__socials">
            <IconButton className="footer__social__icon" target="_blank" href="https://www.linkedin.com/in/harsh-sojitra-a47809204/">
                <LinkedInIcon />
            </IconButton>
            <IconButton className="footer__social__icon" target="_blank" href="https://github.com/harshsojitra007">
                <GitHubIcon />
            </IconButton>
            <IconButton className="footer__social__icon" target="_blank" href="https://www.instagram.com/harsh_sojitra1/">
                <InstagramIcon />
            </IconButton>
            <IconButton className="footer__social__icon" target="_blank" href="https://wa.me/+919016694754">
                <WhatsAppIcon />
            </IconButton>
            <IconButton className="footer__social__icon" target="_blank" href="https://twitter.com/harsh_sojitra1">
                <TwitterIcon />
            </IconButton>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyright © 2023 Harsh Sojitra</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
