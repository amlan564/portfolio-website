import { FaGithub, FaLinkedin } from "react-icons/fa";

export const baseInfo = {
  name: "Amlan",
  position: "Full Stack Developer",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      "I am a frontend developer with experience in React, Next.js, and Tailwind CSS. I have worked on several projects using these technologies.",
  },
  {
    id: 2,
    img: "/images/backend.jpg",
    title: "Backend Development",
    description:
      "I am a backend developer with experience in Node.js, Express.js, and MongoDB. I have worked on several projects using these technologies.",
  },
  {
    id: 3,
    img: "/images/full-stack.jpg",
    title: "Full Stack Development",
    description:
      "I am a full stack developer with experience in MERN stack. I have worked on several projects using these technologies.",
  },
]