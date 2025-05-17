import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const baseInfo = {
  name: "Amlan",
  position: "Full Stack Developer",
  description: "Specializing in frontend web development and skilled in creating user-friendly web applications.",
  profileImage: "/images/profile.jpg",
};

export const socialLinks = [
  {
    id: 1,
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/amlan564",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/amlan-chakraborty/",
  },
];

export const aboutInfo = [
  {
    id: 1,
    img: "/images/frontend.png",
    title: "Frontend Development",
    description:
      "I specialize in frontend development with expertise in React, Next.js, and Tailwind CSS. I have built responsive and user-centric interfaces that prioritize performance, accessibility, and modern design principles.",
  },
  {
    id: 2,
    img: "/images/backend.jpg",
    title: "Backend Development",
    description:
      "I have strong backend development experience using Node.js, Express.js, and MongoDB. I’ve developed scalable APIs and implemented secure, efficient server-side logic for various web applications.",
  },
  {
    id: 3,
    img: "/images/full-stack.jpg",
    title: "Full Stack Development",
    description:
      "As a full stack developer proficient in the MERN stack, I build end-to-end web applications. I seamlessly integrate frontend and backend components to deliver robust, scalable, and maintainable solutions.",
  },
];

export const projectCategories = [
  { id: 1, name: "All" },
  { id: 2, name: "MERN" },
  { id: 3, name: "ReactJS" },
  { id: 4, name: "Java" },
];

export const projectData = [
  {
    id: 1,
    title: "Book Rental",
    description:
      "A website built with ASP.NET allows user to log in as either admin or user. Once logged in as a user, individuals can search for books and request to rent them for either one month or six months. Admin, upon logging in, can add or manage book details, as well as view rental status to approve user requests.",
    image: "/images/book-rental.png",
    tags: ["C#", "ASP.NET", "MSSQL"],
    github: "https://github.com/amlan564/Book-Rental",
    live: "https://github.com/amlan564/Book-Rental",
  },
  {
    id: 2,
    title: "AUST Learning Management",
    description:
      "An Android application based on our university that allows admin to add and manage teacher information. Teachers can post course materials, video lectures, assignments and class announcements. Students can search for course materials and video lectures to see and download.",
    image: "/images/aust-lm.png",
    tags: ["Java", "Firebase"],
    github: "https://github.com/amlan564/AUST-Learning-Management",
    live: "https://github.com/amlan564/AUST-Learning-Management",
  },
  {
    id: 3,
    title: "Hotel Management System",
    description:
      "A Java based desktop application that allows you to log in as an admin or receptionist. As an admin, you can create and manage rooms, employees and drivers. As a receptionist, you can add new clients, access room information, all employee information, client information, manager information, manage client pickup service, search for available rooms, update room status and check out clients.",
    image: "/images/hotel-management.png",
    tags: ["Java", "Java Swing", "MySQL"],
    github: "https://github.com/amlan564/Hotel-Management-System",
    live: "https://github.com/amlan564/Hotel-Management-System",
  },
];

export const skillsData = [
  {
    id: 1,
    name: "JavaScript",
    icon: "/images/js.png",
  },
  {
    id: 2,
    name: "Java",
    icon: "/images/java.png",
  },
  {
    id: 3,
    name: "C++",
    icon: "/images/cpp.png",
  },
  {
    id: 4,
    name: "React",
    icon: "/images/react.png",
  },
  {
    id: 5,
    name: "Next.js",
    icon: "/images/next.png",
  },
  {
    id: 6,
    name: "Node.js",
    icon: "/images/node.png",
  },
  {
    id: 7,
    name: "Express.js",
    icon: "/images/express.png",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "/images/mongodb.png",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    icon: "/images/tailwind.png",
  },
  {
    id: 10,
    name: "HTML",
    icon: "/images/html.png",
  },
  {
    id: 11,
    name: "CSS",
    icon: "/images/css.png",
  },
  {
    id: 12,
    name: "Git",
    icon: "/images/git.png",
  },
  {
    id: 13,
    name: "GitHub",
    icon: "/images/github.png",
  },
  {
    id: 14,
    name: "Redux",
    icon: "/images/redux.png",
  },
  {
    id: 15,
    name: "Firebase",
    icon: "/images/firebase.png",
  },
];