import React from "react";
import { Block } from "./project.styles";

const images = [
  {
    id: 1,
    src: "dummy.png",
    title: "Favorite Quotes",
    skills: [
      "React",
      "Redux",
      "Firebase Authentification",
      "Firebase Firestore Database",
      "The Movie Database (TMDB) API",
      "Tailwind CSS",
    ],
    description:
      "Do you have TV quote that you never forget? In this app, you can add/update your own favorite quotes from your favorite TV shows.",
    github: "Favorite-Quotes",
    live: "https://stupefied-colden-e0851f.netlify.app/",
  },
  {
    id: 2,
    src: "wtwftw_all.png",
    title: "What To Wear For The Weather",
    skills: ["React", "APIs", "CSS"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, assumenda.",
    github: "",
    live: "",
  },
  {
    id: 3,
    src: "dummy.png",
    title: "hogehoge",
    skills: ["React", "APIs", "CSS"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, assumenda.",
    github: "",
  },
  {
    id: 4,
    src: "dummy.png",
    title: "What To Wear For The Weather",
    skills: ["React", "APIs", "CSS"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, assumenda.",
    github: "my-weather-app",
    url: "https://serene-haibt-90ec6e.netlify.app/",
  },
];
function Project() {
  return (
    <Block>
      {images.map((item) => (
        <div>
          <img src={`/assets/projects/${item.src}`} alt={item.title} />
          <h3>{item.title}</h3>
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
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              VIEW LIVE
            </a>
          </div>
        </div>
      ))}
    </Block>
  );
}

export default Project;
