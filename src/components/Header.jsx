import React, { useEffect, useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import CodeIcon from "@mui/icons-material/Code";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { IconButton } from "@mui/material";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (toggle) document.getElementById("nav_menu").style.bottom = "-100%";
    else document.getElementById("nav_menu").style.bottom = "0";
  }, [toggle]);

  useEffect(() => {
    document.querySelectorAll(".nav__link").forEach((n) =>
      n?.addEventListener("click", () => {
        setToggle((state) => !state);
      })
    );
  }, []);

  return (
    <div className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Harsh Sojitra
        </a>

        <div className="nav__menu" id="nav_menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <HomeRoundedIcon /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <InfoRoundedIcon /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <WorkspacePremiumRoundedIcon /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <WorkHistoryOutlinedIcon /> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#coding-profile" className="nav__link">
                <CodeIcon /> Coding Profiles
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <SendRoundedIcon /> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {toggle ? (
        <IconButton
          className="nav__toggle"
          onClick={() => setToggle((state) => !state)}
        >
          <AppsRoundedIcon />
        </IconButton>
      ) : (
        <IconButton
          className="nav__toggle"
          onClick={() => setToggle((state) => !state)}
        >
          <CloseRoundedIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Header;
