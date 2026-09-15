const header = {
  homepage: "https://github.com/DilumNethsara/Portfolio",
  title: "",
};

const about = {
  name: "Dilum Nethsara",
  role: "Developer",

  description:
    "I’m a Computer Science graduated with a passion for building modern apps and web systems" +
    "." +
    " Skilled in Flutter, Dart, Java, Android Studio, API integration and web technologies (React, Js, PHP, Laravel)" +
    "." +
    " An ML & AI enthusiast, I enjoy turning ideas into efficient and visually appealing digital experiences.",
  social: {
    linkedin: "https://www.linkedin.com/in/dilum-nethsara-773587259/",
    github: "https://github.com/DilumNethsara",
  },
};

const projects = [
  {
    name: "Deep Learning Based Tea Leaf Disease Detection System with XAI (Final Year Research Project)",
    description:
      "Developed a deep learning-based tea leaf disease detection system using Python, TensorFlow/Keras, and MobileNetV3Large. The solution integrates Grad-CAM explainability and a Flutter mobile app connected to a FastAPI backend hosted on Railway enabling disease prediction and visual heatmap output for practical Sri Lankan tea plantation use.",
    stack: ["Python", "MobileNetV3Large", "PIL", "FastAPI", "Flutter"],
    sourceCode: "",
    livePreview: "",
    image: "tea.webp",
  },
  {
    name: "Loan Management App",
    description:
      "A simple and smart app that lets users add, organize and manage their personal interests in one place, featuring Bluetooth printing support to easily print and share collected interests.",
    stack: ["Java", "Firebase"],
    sourceCode: "https://github.com/DilumNethsara/InterestCollector-Kandy",
    livePreview: "",
    image: "loan.webp",
    live: true,
  },
  {
    name: "Sales Management App",
    description:
      "A complete mobile solution for sales representatives and admins to manage customers, create orders, generate invoices and track sales. It connects with Windows-based software through Firebase for real-time data syncing and Bluetooth printing.",
    stack: ["Java", "Firebase"],
    sourceCode: "https://github.com/DilumNethsara/SalesApp",
    livePreview: "",
    image: "sales.webp",
  },
  // {
  //   name: "Multiple Location Tracking App",
  //   description:
  //     "A smart, location-based profile manager that lets users organize and visualize their data on a global map. Powered by a real-time MongoDB backend and Flutter, it provides a seamless way to track and explore profiles through an interactive Google Maps interface.",
  //   stack: ["Flutter", "MongoDB"],
  //   sourceCode: "https://github.com/DilumNethsara/Google-map-API_flutter",
  //   livePreview: "",
  //   image: "",
  // },
  {
    name: "Employee Management System (EMS)",
    description:
      "Designed a comprehensive Employee Management System featuring secure user authentication and role-based access control. I implemented full CRUD functionality for managing employees and departments, a dedicated admin dashboard, and a streamlined leave management module. The project leverages a RESTful API architecture to ensure efficient data handling and a professional, scalable user experience.",
    stack: ["React", "Laravel", "SQL"],
    sourceCode: "https://github.com/DilumNethsara/Employee-Management-System",
    livePreview: "",
    image: "ems.webp",
  },
  {
    name: "UniTickets - Web App",
    description:
      "A university event ticket booking platform where students can view upcoming events, book up to five tickets per event and verify their accounts with university IDs to unlock special offers. The system includes admin-managed event listings and a built-in forum for user communication.",
    stack: ["PHP", "SQL"],
    sourceCode: "https://github.com/DilumNethsara/UniTickets-Web-Project",
    livePreview: "",
    image: "unitk.webp",
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
    image: "salary.webp",
  },
  {
    name: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website built using JavaScript, HTML, and CSS. It showcases my projects, skills, and experience with smooth UI interactions, lightweight animations, and a clean layout. Designed to highlight my work and provide a seamless browsing experience across all devices.",
    stack: ["React", "JavaScript"],
    sourceCode: "https://github.com/DilumNethsara/Portfolio",
    livePreview: "https://dilumnethsara.github.io/",
    image: "pf.webp",
  },
];

const skills = [
  "Flutter",
  "Dart",
  "Java",
  "PHP",
  "Laravel",
  "Firebase",
  "MongoDB",
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
  email: "lvdnethsara@gmail.com",
};

export { header, about, projects, skills, contact };
