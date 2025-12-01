const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/DilumNethsara/Portfolio",
  title: "",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Dilum Nethsara",
  role: "Mobile App Developer",

  description:
    "I’m a Computer Science undergraduate with a passion for building modern apps and web systems" +
    "." +
    " Skilled in Flutter, Dart, Android Studio(Java), API integration and web technologies (React, PHP, HTML, CSS)" +
    "." +
    " An ML & AI enthusiast, I enjoy turning ideas into efficient and visually appealing digital experiences.",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/dilum-nethsara-773587259/",
    github: "https://github.com/DilumNethsara",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Interest Collector App",
    description:
      "A simple and smart app that lets users add, organize and manage their personal interests in one place, featuring Bluetooth printing support to easily print and share collected interests.",
    stack: ["Java", "Firebase"],
    sourceCode: "https://github.com/DilumNethsara/InterestCollector-Kandy",
    livePreview: "",
    image: "",
    live: true,
  },
  {
    name: "Sales App",
    description:
      "A complete mobile solution for sales representatives and admins to manage customers, create orders, generate invoices and track sales. It connects with Windows-based software through Firebase for real-time data syncing and Bluetooth printing.",
    stack: ["Java", "Firebase"],
    sourceCode: "https://github.com/DilumNethsara/SalesApp",
    livePreview: "",
    image: "",
  },
  {
    name: "UniTickets - Web App",
    description:
      "A university event ticket booking platform where students can view upcoming events, book up to five tickets per event and verify their accounts with university IDs to unlock special offers. The system includes admin-managed event listings and a built-in forum for user communication.",
    stack: ["PHP", "SQL"],
    sourceCode: "https://github.com/DilumNethsara/UniTickets-Web-Project",
    livePreview: "",
    group: true,
  },
  {
    name: "Salary Prediction App",
    description:
      "A machine learning-based app that predicts salaries based on factors like experience and working hours. The model, built using Python, analyzes input data to provide accurate salary estimates with a clean and interactive interface.",
    stack: ["Python", "ML"],
    sourceCode:
      "https://github.com/DilumNethsara/Machine-Learning-Salary-Prediction-App",
    livePreview: "",
  },
  {
    name: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website built using JavaScript, HTML, and CSS. It showcases my projects, skills, and experience with smooth UI interactions, lightweight animations, and a clean layout. Designed to highlight my work and provide a seamless browsing experience across all devices.",
    stack: ["React", "JavaScript"],
    sourceCode: "https://github.com/DilumNethsara/Portfolio",
    livePreview: "",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Flutter",
  "Dart",
  "Java",
  "Firebase",
  "Python",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "XML",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "dilumnethsara2020@gmail.com",
};

export { header, about, projects, skills, contact };
