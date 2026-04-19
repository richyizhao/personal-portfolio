import inventoryTracker from "@/assets/inventory-tracker.png"
import animalClassifier from "@/assets/animal-classifier.png"
import aeronauticsClub from "@/assets/aeronautics-club.png"
import arduinoSonarRover from "@/assets/arduino-sonar-rover.jpg"

export const layoutData = {
  navbarItems: [
    { href: "#about", label: "ABOUT" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#skills", label: "SKILLS" },
  ],
  externalLinks: [
    {
      href: "https://github.com/richyizhao",
      icon: "mdi:github",
    },
    {
      href: "https://www.linkedin.com/in/rzha/",
      icon: "mdi:linkedin",
    },
    { href: "/personal-cv.pdf", icon: "mdi:resume" },
    {
      href: "mailto:richardzhaoforwork@gmail.com",
      icon: "bxl:gmail",
    },
  ],
}

export const sectionsData = {
  projects: [
    {
      title: "Inventory Tracker",
      description:
        "Web app for inventory operations with a system that handles reports, products, transactions, and user management, along with scalable infrastructure.",
      codeLink: "https://github.com/richyizhao/inventory-tracker-app",
      demoLink: "",
      imageSrc: inventoryTracker,
      imageAlt: "Inventory Tracker App preview",
      features: [
        "Track product inventory with transactions and analytics",
        "User authentication & role-based permissions management",
        "Automated Azure Pipeline tests with Vitest, Playwright, xUnit",
        "Terraform infra with Azure App Service, PostgreSQL, Blob Storage",
      ],
      techstackBadges: [
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "Tanstack", icon: "simple-icons:tanstack" },
        { name: "Shadcn", icon: "vscode-icons:file-type-light-shadcn" },
        { name: "Vitest", icon: "logos:vitest" },
        { name: "Playwright", icon: "logos:playwright" },
        { name: "ASP.NET Core", icon: "logos:dotnet" },
        { name: "PostgreSQL", icon: "devicon:postgresql" },
        { name: "xUnit", icon: "guidance:remove-x-cross" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Terraform", icon: "devicon:terraform" },
        { name: "Azure", icon: "devicon:azure" },
      ],
    },
    {
      title: "Animal Classifier",
      description:
        "Desktop app for AI analysing wildlife images and identifying individual animals. It features batch processing, species AI models, and identification.",
      codeLink: "https://github.com/richyizhao/animal-classifier-app",
      demoLink: "",
      imageSrc: animalClassifier,
      imageAlt: "Animal Classifier App preview",
      features: [
        "Upload and view wildlife images",
        "Detect different species with Detect AI model",
        "Re-identify individual mammals with REID AI model",
      ],
      techstackBadges: [
        { name: "Electron", icon: "logos:electron" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Vitest", icon: "logos:vitest" },
        { name: "Python", icon: "logos:python" },
        { name: "PyTorch", icon: "devicon:pytorch" },
      ],
    },
    {
      title: "Aeronautics Club",
      description:
        "Website commissioned by the University of Auckland Aeronautics Club. Designed to clearly present the club's past work.",
      codeLink: "https://github.com/richyizhao/uoa-aeronautics-club-website",
      demoLink: "https://www.aeronauticsuoa.com/",
      imageSrc: aeronauticsClub,
      imageAlt: "UOA Aeronautics Club Website preview",
      features: [
        "Smooth fade-in page transitions",
        "Custom hamburger menu UI animations",
        "Responsive design for desktop and mobile",
      ],
      techstackBadges: [
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      ],
    },
    {
      title: "Sonar Rover",
      description:
        "Autonomous rover designed for obstacle detection and RC movement. It features an ultrasonic scanning system, and motor driver control.",
      codeLink: "https://github.com/richyizhao/bluetooth-arduino-robot",
      demoLink: "",
      imageSrc: arduinoSonarRover,
      imageAlt: "Sonar Rover preview",
      features: [
        "Automated distance reporting using sweep-based servo scanning",
        "Bluetooth remote control with an Android app",
      ],
      techstackBadges: [
        { name: "Arduino IDE", icon: "skill-icons:arduino" },
        { name: "C/C++", icon: "devicon:cplusplus" },
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      techstackItems: [
        { name: "Figma", icon: "logos:figma" },
        { name: "Vite", icon: "logos:vitejs" },
        { name: "Electron", icon: "logos:electron" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Expo", icon: "devicon:expo", className: "dark:invert" },
        {
          name: "Shadcn",
          icon: "vscode-icons:file-type-light-shadcn",
          className: "dark:invert",
        },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      ],
    },
    {
      category: "Backend",
      techstackItems: [
        { name: "Node.js", icon: "devicon:nodejs" },
        {
          name: "Express.js",
          icon: "devicon:express",
          className: "dark:invert",
        },
        { name: "ASP.NET Core", icon: "logos:dotnet" },
        { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
        { name: "SQLite", icon: "devicon:sqlite" },
        { name: "PostgreSQL", icon: "devicon:postgresql" },
      ],
    },
    {
      category: "DevOps",
      techstackItems: [
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
      techstackItems: [
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
  ],
}
