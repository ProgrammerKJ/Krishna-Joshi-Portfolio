import styles from "./ProjectsStyles.module.css";
import movieMingleLight from "../../assets/MovieMingleLight.png";
import movieMingleDark from "../../assets/MovieMingleDark.png";
import mealMastersLight from "../../assets/MealMasterLight.png";
import mealMastersDark from "../../assets/MealMasterDark.png";
import fashionStopLight from "../../assets/FashionStopLight.png";
import fashionStopDark from "../../assets/FashionStopDark1.png";
import joblyLight from "../../assets/Joblylight.png";
import joblyDark from "../../assets/JoblyDark2.png";
import hackOrSnoozeLight from "../../assets/HackorSnoozeLight1.png";
import hackOrSnoozeDark from "../../assets/HackorSnoozedark1.png";
import ProjectCard from "../../common/ProjectCard";

import { useTheme } from "../../common/ThemeContext";

function Projects() {
  const { theme } = useTheme();

  const movieMingle = theme === "light" ? movieMingleDark : movieMingleLight;
  const mealMasters = theme === "light" ? mealMastersDark : mealMastersLight;
  const fashionStop = theme === "light" ? fashionStopDark : fashionStopLight;
  const jobly = theme === "light" ? joblyDark : joblyLight;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
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
          src={fashionStop}
          h3="Fashion Stop (In Progress)"
          p="E Commerce App"
        />
        <ProjectCard
          src={jobly}
          link={"https://github.com/ProgrammerKJ/React_Jobly"}
          h3="Jobly"
          p="Job Search App"
        />
      </div>
    </section>
  );
}

export default Projects;
