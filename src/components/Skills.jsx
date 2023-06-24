import React from "react";
import SkillsSubouter from "./SkillsSubouter";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="m-t-4">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technicalities</span>

        <div className="technical__outer">
          <div className="skills__box">
            <div className="skill__title">Frontend Technologies</div>

            <div className="skill__list">
              <SkillsSubouter
                skillName={"ReactJs"}
                skillLevel={"Intermediate"}
              />
              <SkillsSubouter skillName={"HTML"} skillLevel={"Advanced"} />
              <SkillsSubouter skillName={"MaterialUI"} skillLevel={"Basic"} />
              <SkillsSubouter
                skillName={"JS/JQuery"}
                skillLevel={"Intermediate"}
              />
              <SkillsSubouter skillName={"CSS"} skillLevel={"Intermediate"} />
              <SkillsSubouter skillName={"Bootstrap"} skillLevel={"Basic"} />
            </div>
          </div>

          <div className="skills__box">
            <div className="skill__title">Backend Technologies</div>

            <div className="skill__list">
              <SkillsSubouter
                skillName={"NodeJs"}
                skillLevel={"Intermediate"}
              />
              <SkillsSubouter skillName={"SQL"} skillLevel={"Intermediate"} />
              <SkillsSubouter
                skillName={"MongoDB"}
                skillLevel={"Intermediate"}
              />
              <SkillsSubouter skillName={"Java"} skillLevel={"Basic"} />
              <SkillsSubouter skillName={"Spring"} skillLevel={"Basic"} />
              <SkillsSubouter skillName={"API"} skillLevel={"Intermediate"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
