import InventoryTrackerImg from "../assets/projects/inventory-tracker/1.png"
import AeruonauticsClubImg from "../assets/projects/aeronautics-club/1.png"
import AnimalClassifier from "../assets/projects/animal-classifier/1.png"
import ArduinoSonarRobot from "../assets/projects/arduino-sonar-rover/1.jpg"
import type { LinkItem, NavItem, Project, SkillGroup } from "../types/content"

export const linksData: LinkItem[] = [
  { href: "https://github.com/richyizhao", icon: "mdi:github", label: "Github" },
  { href: "https://www.linkedin.com/in/rzha/", icon: "mdi:linkedin", label: "LinkedIn" },
  { href: "/personal-cv.pdf", icon: "mdi:resume", label: "Resume" },
  { href: "mailto:richardzhaoforwork@gmail.com", icon: "bxl:gmail", label: "Gmail" },
]

export const navbarData: NavItem[] = [
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
]

export const projectsData: Project[] = [
  {
    title: "Inventory Tracker",
    codeLink: "https://github.com/richyizhao/inventory-tracker-app",
    description:
      "Web app for inventory operations end to end with a system that handles reports, categories, products, transactions, and user management, along with scalable infrastructure for deployment.",
    features: [
      "Dashboard and analytics views backed by dedicated reporting and inventory endpoints",
      "Product, category, subcategory, and transaction workflows for end-to-end stock management",
      "JWT authentication with session handling, profile updates, and role-based permissions",
      "Demo-data generation plus unit and Playwright E2E testing workflows for development",
    ],
    badge: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Tanstack", icon: "simple-icons:tanstack" },
      { name: "Shadcn", icon: "vscode-icons:file-type-light-shadcn" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Vitest", icon: "logos:vitest" },
      { name: "Playwright", icon: "logos:playwright" },
      { name: "ASP.NET Core", icon: "logos:dotnet" },
      { name: "xUnit", icon: "guidance:remove-x-cross" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Github Actions", icon: "devicon:githubactions" },
      { name: "Terraform", icon: "devicon:terraform" },
      { name: "Azure", icon: "devicon:azure" },
    ],
    image: InventoryTrackerImg,
    slug: "inventory-tracker",
  },
  {
    title: "Animal Classifier",
    codeLink: "https://github.com/richyizhao/animal-classifier-app",
    description:
      "Desktop app for AI analysing wildlife images and identifying individual animals. It features batch processing, species AI models, and identification results for streamlined conservation work.",
    features: [
      "Batch image processing for multiple images at once",
      "Species-specific AI model selection",
      "Exportable identification results",
      "Keyboard shortcuts for faster workflow",
    ],
    badge: [
      { name: "Electron", icon: "logos:electron" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Vitest", icon: "logos:vitest" },
      { name: "Python", icon: "logos:python" },
      { name: "PyTorch", icon: "devicon:pytorch" },
    ],
    image: AnimalClassifier,
    slug: "animal-classifier",
  },
  {
    title: "Aeronautics Club",
    codeLink: "https://github.com/richyizhao/uoa-aeronautics-club-website",
    demoLink: "https://www.aeronauticsuoa.com/",
    description:
      "Website commissioned by the University of Auckland Aeronautics Club. Designed to clearly present the club's activities, overview of projects, past work, and opportunities for students to get involved.",
    features: [
      "Hamburger menu with smooth animations and responsive design",
      "Smooth fade-in page transitions",
    ],
    badge: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
    image: AeruonauticsClubImg,
    slug: "aeronautics-club",
  },
  {
    title: "Arduino Sonar Rover",
    codeLink: "https://github.com/richyizhao/bluetooth-arduino-robot",
    description:
      "Autonomous rover designed for obstacle detection and remote-controlled movement. It features an ultrasonic scanning system, and motor driver control.",
    features: [
      "Automated distance reporting using sweep-based servo scanning",
      "Bluetooth control with dual gearbox motors and L298N controller",
    ],
    badge: [
      { name: "Arduino IDE", icon: "skill-icons:arduino" },
      { name: "C/C++", icon: "devicon:cplusplus" },
    ],
    image: ArduinoSonarRobot,
    slug: "arduino-sonar-rover",
  },
]

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Figma", icon: "logos:figma" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Electron", icon: "logos:electron" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Expo", icon: "devicon:expo", className: "dark:invert" },
      { name: "Shadcn", icon: "vscode-icons:file-type-light-shadcn", className: "dark:invert" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "Express.js", icon: "devicon:express", className: "dark:invert" },
      { name: "ASP.NET Core", icon: "logos:dotnet" },
      { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
      { name: "SQLite", icon: "devicon:sqlite" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Vitest", icon: "logos:vitest" },
      { name: "Playwright", icon: "logos:playwright" },
      { name: "xUnit", icon: "guidance:remove-x-cross" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Github Actions", icon: "devicon:githubactions" },
      { name: "Terraform", icon: "devicon:terraform" },
      { name: "Azure", icon: "devicon:azure" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Arduino IDE", icon: "skill-icons:arduino" },
      { name: "VSCode", icon: "devicon:vscode" },
      { name: "Visual Studio", icon: "devicon:visualstudio" },
      { name: "PyTorch", icon: "devicon:pytorch" },
      { name: "C/C++", icon: "devicon:cplusplus" },
      { name: "C#", icon: "devicon:csharp" },
      { name: "Java", icon: "devicon:java" },
      { name: "Python", icon: "logos:python" },
      { name: "JavaScript", icon: "skill-icons:javascript" },
    ],
  },
]
