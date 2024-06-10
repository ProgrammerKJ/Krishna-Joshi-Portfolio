import styles from "./HeroStyles.module.css";
import heroImgLight from "../../assets/LightImg.png";
import heroImgDark from "../../assets/DarkImg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const heroImg = theme === "light" ? heroImgLight : heroImgDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Cartoon picture of Krishna Joshi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light & Dark mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Krishna
          <br />
          Joshi
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="http://www.linkedin.com/in/krishnajoshi28" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="http://github.com/ProgrammerKJ" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Line about what you are or what makes you a great software engineer
        </p>
        <a href="https://docs.google.com/document/d/10AGCHf8YD8skNDnBXp0Gl6me3CnBz2p4/edit?usp=sharing&ouid=110621110171723706693&rtpof=true&sd=true">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
