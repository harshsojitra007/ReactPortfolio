import React from "react";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import LeetCodeLogo from "../assets/images/leetcode__logo.png";
import CodeChefLogo from "../assets/images/codechef__logo.jpg";
import CodeForcesLogo from "../assets/images/codeforces__logo.png";

import "swiper/css";
import "swiper/css/navigation";
import { IconButton } from "@mui/material";
import { VerifiedRounded } from "@mui/icons-material";

const profilesList = [
  {
    platform: "Leetcode",
    username: "harsh_sojitra1",
    link: "https://leetcode.com/harsh_sojitra1",
    description: [`~600 DSA problems solved`, `Knight Badge Holder`, `Max rating 1865(top 5%)`],
    logo: LeetCodeLogo,
  },
  {
    platform: "CodeChef",
    username: "harsh_sojitra1",
    link: "https://codechef.com/users/harsh_sojitra1",
    description: [`~500 problems solved`, `3* rating`],
    logo: CodeChefLogo,
  },
  {
    platform: "Codeforces",
    username: "harshsojitra007",
    link: "https://codeforces.com/profile/harshsojitra007",
    description: [`newbie at CF`],
    logo: CodeForcesLogo,
  },
];

const CodingProfiles = () => {
  return (
    <section className="coding-profile section" id="coding-profile">
      <div className="m-t-4">
        <h2 className="section__title">Coding Profiles</h2>
        <span className="section__subtitle">Competetive Coding & DSA</span>

        <div className="profiles__outer">
          <div className="swiper__main">
            {profilesList?.map((profile) => (
              <div className="single__profile__box" key={profile?.platform}>
                <div className="platform__details__outer">
                  <div className="stack__image__div">
                    <img
                      src={profile?.logo}
                      alt="platform__logo"
                      className="platform__image"
                    />
                  </div>
                  <div className="platform__name">{profile?.platform}</div>
                </div>

                <div className="user__details__outer">
                  <div className="username">
                    <p className="coding__profile__username">
                      {profile?.username}
                    </p>
                    <IconButton target="_blank" href={profile?.link}>
                      <OpenInNewRoundedIcon />
                    </IconButton>
                  </div>
                  <div className="platform__description">
                    {profile?.description?.map((desc, idx) => (
                      <div key={idx} className="detailed__project__description__outer">
                        <VerifiedRounded className="color__primary" />
                        <p className="detailed__project__description">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
