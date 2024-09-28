import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Welcome to my portfolio! I am a recent BTech graduate with a strong passion for frontend development and a keen interest in React. As a fresher, I am excited to dive into the tech world, leveraging my knowledge to create dynamic and responsive web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. As a fresher, I'm eager to bring innovative ideas to life through dynamic and responsive web applications`;

export const EXPERIENCES = [
  {
    year: "Sept 2023 - Jan 2024",
    role: "Intern Ecommerce Developer",
    company: " Cnetric Global Inc.",
    description: `Implemented MACH architecture principles to develop B2C and B2B e-commerce websites using Spryker Ecommerce tool during internship, enhancing understanding of modern e-commerce frameworks.Leveraged Postman to efficiently fetch APIs for various tasks, including uploading product catalogues and managing data interactions. `,
    technologies: ["Spryker", "Postman", "MACH Architecture", "B2B Software", "Composable Commerce"],
  },
];

export const PROJECTS = [
  // {
  //   title: "E-Commerce Website",
  //   image: project1,
  //   description:
  //     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //   technologies: ["Spryker", "B2B Commerce", "MACH Architecture"],
  //    github: "https://github.com/username/E-commerce",
  // },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Framer Motion", "tailwind CSS"],
     github: "https://github.com/muskanchoudhary001/Portfolio-React",
    link: "https://muskanchoudhary.vercel.app/",
  },
  {
    title: "Hangman Game",
    image: project3,
    description:
      "Developed a responsive Hangman game utilizing HTML, CSS, and JavaScript, showcasing proficient front-end development skills. Implemented functionality allowing users to guess letters of a randomly generated word within a limited number of attempts, enhancing user engagement and interaction. Integrated a dynamic hangman illustration feature, progressively revealing incorrect guesses on the gallows, demonstrating creativity and attention to detail in design implementation.",
    technologies: ["HTML", "CSS", "Javascript"],
     github: "https://github.com/muskanchoudhary001/HangmanGame",
    link: "https://hangman-games-lovat.vercel.app/",
  },
  {
    title: "Voice Enabled Note Application",
    image: project4,
    description:
      "A web application that allows users to transcribe speech into text using voice commands. The app includes features such as start, stop, copy, and reset functions, providing a seamless way to take notes by speaking. It leverages Web Speech API for voice recognition.",
    technologies: ["React", "CSS", "Web Speech API", "JavaScript"],
    github: "https://github.com/muskanchoudhary001/Voice_Enabled_Note_Applicatiion",
    link: "https://voice-enabled-note-applicatiion.vercel.app/",
},

];

export const CONTACT = {
  linkedIn: "https://www.linkedin.com/in/muskan-choudhary-789759175/ ",
  // phoneNo: "+91 77371 045 59 ",
  email: "muskanchoudhary1303@gmail.com",
};
