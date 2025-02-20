import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/chitrakatha.jpg"; // Add an image for Chitrakatha

export const HERO_CONTENT = `Welcome to my portfolio! I'm a passionate Frontend Developer with experience in Next.js, React, and modern web technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. As a fresher, I'm eager to bring innovative ideas to life through dynamic and responsive web applications`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Feb 2025",
    role: "Web Development Intern",
    company: "Brainwave Matrix Solutions",
    description: `Completed two small-scale projects utilizing HTML, CSS, and JavaScript, gaining hands-on experience in web development.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "Oct 2024 - Jan 2025",
    role: "Frontend Developer Intern",
    company: "Android Engineers",
    description: `Gained hands-on experience with Next.js, Tailwind CSS, and Vercel while developing UI components and designing pages for a live website during an internship. Quickly adapted to Next.js, enhancing skills in server-side rendering and modern frontend workflows.`,
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel", "GitHub"],
  },
  {
    year: "Sept 2023 - Jan 2024",
    role: "Intern Ecommerce Developer",
    company: "Cnetric Global Inc.",
    description: `Implemented MACH architecture principles to develop B2C and B2B e-commerce websites using Spryker Ecommerce tool during internship, enhancing understanding of modern e-commerce frameworks. Leveraged Postman to efficiently fetch APIs for various tasks, including uploading product catalogues and managing data interactions.`,
    technologies: ["Spryker", "Postman", "MACH Architecture", "B2B Software", "Composable Commerce"],
  },
];

export const PROJECTS = [
  {
    title: "Chitrakatha - The Movie App",
    image: project7,
    description:
      "A movie suggestion app using React.js, TMDB API, and Appwrite for tracking popular searches. Implemented debounced search, designed an intuitive UI with Tailwind CSS, and deployed on Vercel.",
    technologies: ["React.js", "TMDB API", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/muskanchoudhary001/Chitrakatha",
    link: "https://chitrakatha-movieapp.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/muskanchoudhary001/Portfolio-React",
    link: "https://muskanchoudhary.vercel.app/",
  },
  {
    title: "Hangman Game",
    image: project3,
    description:
      "Developed a responsive Hangman game utilizing HTML, CSS, and JavaScript, showcasing proficient front-end development skills. Implemented functionality allowing users to guess letters of a randomly generated word within a limited number of attempts, enhancing user engagement and interaction. Integrated a dynamic hangman illustration feature, progressively revealing incorrect guesses on the gallows, demonstrating creativity and attention to detail in design implementation.",
    technologies: ["HTML", "CSS", "JavaScript"],
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
  {
    title: "Expense Tracker",
    image: project5,
    description:
      "A web application to track and manage expenses and income. It allows users to categorize transactions, provides an overview of financial data, and includes color-coded categories for better visualization. The app is built with React and includes functionalities for adding, deleting, and viewing transactions.",
    technologies: ["React", "CSS", "JavaScript", "Context API"],
    github: "https://github.com/muskanchoudhary001/Expense_Tracker",
    link: "https://expense-tracker-rose-pi.vercel.app/",
  },
  {
    title: "ChicThreads - The Ecommerce Store",
    image: project6,
    description:
      "A responsive eCommerce frontend for clothing and accessories, built during my internship at Brainwave Matrix Solutions. Features include a modern grid layout, customizable components, newsletter subscription, and social media integration.",
    technologies: ["HTML", "CSS", "JavaScript", "Font Awesome Icons"],
    github: "https://github.com/muskanchoudhary001/ChicThreads.-The-Ecommerce-Store",
    link: "https://chic-threads-the-ecommerce-store.vercel.app/",
  },
];

export const CONTACT = {
  linkedIn: "https://www.linkedin.com/in/muskan-choudhary-789759175/",
  email: "muskanchoudhary1303@gmail.com",
};
