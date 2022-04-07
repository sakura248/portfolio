import React from "react";
import { Block, PjtImg } from "./project.styles";

const images = [
  {
    id: 1,
    src: "fq_desktop.png",
    gif: "fq_scrolling.gif",
    title: "Favorite Quotes",
    skills: [
      "React",
      "Redux",
      "Firebase Authentication",
      "Firebase Firestore Database",
      "The Movie Database (TMDB) API",
      "Tailwind CSS",
    ],
    description:
      "Do you have a iconic TV lines that you'll never forget? In this app, you can add/update your own favorite quotes from your favorite TV shows with your account.",
    github: "Favorite-Quotes",
    live: "https://stupefied-colden-e0851f.netlify.app/",
  },
  {
    id: 2,
    src: "wtwftw_all.png",
    gif: "wtw_desktop.gif",
    title: "What To Wear For The Weather",
    skills: ["React", "OpenWeatherAPI", "CSS3"],
    description:
      "Have you ever wondered what to wear for the temperature? Here is the solution! This app suggests what kind of cloth to wear in your area in real-time. You can also check the hourly and weekly forecast. Of course, you can change the location.",
    github: "what-to-wear",
    live: "https://serene-haibt-90ec6e.netlify.app/",
  },
  {
    id: 3,
    src: "blog_all.png",
    gif: "blog_scrolling.gif",
    title: "Blog crud app",
    skills: ["React", "Node.js", "MongoDB Atlas", "CSS3"],
    description: "I made this blog crud app to practice and learn MERN stack",
    github: "/Blog_crud",
  },
  {
    id: 4,
    src: "myself.png",
    gif: "myself_scrolling.gif",
    title: "Express Myself",
    skills: ["React", "CSS3"],
    description:
      "This is the first React app I made. The purpose of this website is just to express myself, since I am a person with few words. I designed the way I like, and put the things I created or I love.",
    github: "express-myself",
    live: "https://quizzical-mclean-379071.netlify.app/",
  },
  {
    id: 4,
    src: "portfolio_all.png",
    gif: "portfolio_scrolling.gif",
    title: "My Portfolio Website",
    skills: ["React", "TypeScript", "Styled Components"],
    description:
      "Designed and created by me! I used TypeScript to improve my skill.",
    github: "portfolio",
  },
];
function Project() {
  return (
    <Block>
      {images.map((item) => (
        <div className="project-container">
          <h3>{item.title}</h3>
          <div className="project-block">
            <div className="info-wrapper">
              <ul>
                {item.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
              <p>{item.description}</p>
              <div className="link-area">
                <a
                  href={`https://github.com/sakura248/${item.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
                {item.live && (
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    VIEW LIVE
                  </a>
                )}
              </div>
            </div>
            <PjtImg>
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="gif"
              >
                <img
                  src={`/assets/projects/${item.src}`}
                  alt={item.title}
                  className="static"
                />
                <img src={`/assets/projects/${item.gif}`} alt={item.title} />
              </a>
            </PjtImg>
          </div>
        </div>
      ))}
    </Block>
  );
}

export default Project;
