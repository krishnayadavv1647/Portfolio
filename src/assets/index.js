import Spotify from "../assets/projects/Spotify.png"
import MovieApp from "../assets/projects/MovieApp.png"
import project3 from "../assets/projects/project-3.jpg";
import Blogging from "../assets/projects/Blogging.png"
import Portfolio from "../assets/projects/PortFolio.png"

export const HERO_CONTENT = `Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy turning ideas into real-world projects and constantly improving my skills by learning modern web technologies and best practices.`;

export const ABOUT_TEXT = `Hi, I’m Krishna Yadav, a passionate and motivated fresher Frontend Developer eager to start my career in web development. I have a strong foundation in HTML, CSS, JavaScript, and React, and I enjoy building responsive and user-friendly web applications. As a fresher, I am always excited to learn new technologies and improve my skills through practice and real-world projects. I focus on writing clean code and creating modern user interfaces. My goal is to grow as a developer, gain practical experience, and contribute to building impactful and high-quality web applications.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Spotify Clone",
    image: Spotify,
    description:
      "Developed a Spotify Clone using HTML, CSS, JavaScript, and React, featuring play, pause, and track controls. Built a responsive and interactive user interface with smooth audio playback.",
    technologies: ["HTML", "CSS", "Javascript", "React" , "Tailwind"],
  },
  {
    title: "Movie App",
    image: MovieApp,
    description:
      "Developed a Movie App using HTML, CSS, JavaScript, and React that allows users to browse and search for movies. Integrated API to fetch real-time movie data and display details like ratings, posters, and overviews. Built a responsive and user-friendly interface, improving skills in API handling, state management, and dynamic rendering.",
    technologies: ["HTML", "CSS", "Javascript", "React","Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: Blogging,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Javascript", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Behind Jodhpur Sweets Gumanpura Kota Rajasthan",
  phoneNo: "+91 8000281647",
  email: "krishnayadavv1647@gmail.com",
};