import styles from "./ProjectsStyles.module.css";
import movieMingleLight from "../../assets/MovieMingleLight.png";
import movieMingleDark from "../../assets/MovieMingleDark.png";
import mealMastersLight from "../../assets/MealMasterLight.png";
import mealMastersDark from "../../assets/MealMasterDark.png";
import ProjectCard from "../../common/ProjectCard";
import cryptoLight from "../../assets/Cryptocoinlight.png";
import cryptoDark from "../../assets/Cryptocoindark.png";
import feastFinderLight from "../../assets/FeastFinderLight.png";
import feastFinderDark from "../../assets/FeastFinderDark.png";
import benchwarmersLight from "../../assets/LightBasketball.png"
import benchwarmersDark from "../../assets/DarkBasketball.png"

import { useTheme } from "../../common/ThemeContext";

function Projects() {
  const { theme } = useTheme();

  const movieMingle = theme === "light" ? movieMingleDark : movieMingleLight;
  const mealMasters = theme === "light" ? mealMastersDark : mealMastersLight;
  const crypto = theme === "light" ? cryptoDark : cryptoLight;
  const feastFinder = theme === "light" ? feastFinderDark : feastFinderLight;
  const benchWarmers = theme === "light" ? benchwarmersLight : benchwarmersDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <h2 className="project-below-text" style={{ marginBottom: "20px" }}>
        Walkthroughs & Deployment Links In Github Readme Section
      </h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mealMasters}
          link={"https://github.com/ProgrammerKJ/Meal_Masters"}
          h3="Meal Masters"
          p="Food Recipe App"
        />
        <ProjectCard
          src={movieMingle}
          link={
            "https://github.com/ProgrammerKJ/Movie_Mingle_Social_Media_Application"
          }
          h3="Movie Mingle"
          p="Social Media App"
        />
        <ProjectCard
          src={benchWarmers}
          link={"https://github.com/ProgrammerKJ/Benchwarmers-Fantasy-Basketball-Application"}
          h3="Benchwarmers"
          p="Fantasy Basketball Application"
        />
        <ProjectCard
          src={crypto}
          link={"https://cryptocoin23.netlify.app/"}
          h3="CryptoCoin"
          p="Crypto Currency App"
        />
        <ProjectCard
          src={feastFinder}
          link={"https://github.com/ProgrammerKJ/FeastFinders_Food_Delivery"}
          h3="Feast Finder"
          p="Food Delivery Application"
        />
      </div>
    </section>
  );
}

export default Projects;
