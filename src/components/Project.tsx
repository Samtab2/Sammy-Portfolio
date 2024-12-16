import News from "../assets/images/News.png";
import Wear from "../assets/images/What to wear.png";
import US from "../assets/images/Around The US.png";
import Coffee from "../assets/images/Coffee Shop.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://samtab2.github.io/Sammy_news_explorer-frontend/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={News} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://samtab2.github.io/Sammy_news_explorer-frontend/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>News Explorer</h2>
          </a>
          <p>
            Designed, developed, and launched a news explorer app with React and search functionality.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Samtab2/se_project_react"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Wear} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Samtab2/se_project_react"
            target="_blank"
            rel="noreferrer"
          >
            <h2>What to Wear</h2>
          </a>
          <p>
            Developed a React app and Backend API that suggests clothing based
            on weather.
          </p>
        </div>
        <div className="project">
          <a
            href="https://samtab2.github.io/se_project_aroundtheus/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={US} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://samtab2.github.io/se_project_aroundtheus/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Around The US</h2>
          </a>
          <p>
            A web application that allows users to create and customize their
            profiles by uploading a profile picture, changing their display
            name, and selecting a personalized card image. The app features user
            registration, real-time updates, and a responsive design, showcasing
            skills in front-end development and user experience and Used with JavaScript, HTML, and CSS.
          </p>
        </div>
        <div className="project">
          <a
            href="https://samtab2.github.io/se_project_coffeeshop/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Coffee} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://samtab2.github.io/se_project_coffeeshop/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Coffee Shop</h2>
          </a>
          <p>
            Developed a Coffee Shop with HTML and CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
