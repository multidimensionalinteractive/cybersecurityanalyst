import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">My Skills</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
      I bridge the gap between design and development.
      I like to craft an aesthetic user interface and UX using modern best practices.
      <br /><br />
      I am currently pursuing advanced training in IT, DevOps and Security, I am actively enrolled in AZ104, AZ500, and SEC+ courses. 
      <br /><br />
      As a seasoned IT support professional, Security Engineer, and UX developer, I am well-versed in bridging the gap between software development and design. Leveraging modern best practices, I strive to craft top-notch user experiences that exceed expectations.
      <br /><br />
      With a robust background in IT fundamentals, software design, development, and testing, I am eager to contribute my technical, analytical, and programming skills to a challenging role as a security engineer. My in-depth understanding of user experience design also enables me to effectively anticipate and address user needs in the context of IT and security.
      <br /><br />
      Over the course of my career, I have participated in more than 20 successful projects, spanning a wide range of fields, including front-end development, UI/UX design, game design, motion graphics, and blockchain technology. In recent years, I have deepened my expertise in DevOps and security, dedicating myself to daily learning and staying abreast of emerging technologies and trends, such as cybersecurity, AI/ML, the Metaverse, and cutting-edge programming languages and frameworks, such as Python and GO.
      <br /><br />
      Overall, I am a highly motivated, intellectually curious, and results-driven professional, eager to take on new challenges and make a meaningful impact in the world of technology.
      {" "}
      </h2>
       
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <Image
            key={skill}
            src={`/skills/${skill}.svg`}
            alt={skill}
            width={76}
            height={76}
            className="skill"
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10">
            {renderSkillColumn("FRONTEND DEVELOPMENT", SKILLS.frontend)}
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn(
                "User Interface, User Experience Design",
                SKILLS.userInterface
              )}
            </div>
            <div>{renderSkillColumn("Other Skills", SKILLS.other)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
