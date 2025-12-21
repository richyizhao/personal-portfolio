export type Skill = {
  name: string
  icon: string
  className?: string
}

export type SkillGroup = {
  category: string
  skills: Skill[]
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Figma", icon: "logos:figma" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Electron", icon: "logos:electron" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "React.js", icon: "logos:react" },
      { name: "Expo", icon: "devicon:expo", className: "dark:invert" },
      { name: "Nativewind CSS", icon: "/src/assets/icon/nativewind.svg", className: "dark:invert" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "Express.js", icon: "devicon:express", className: "dark:invert" },
      { name: ".Net", icon: "logos:dotnet" },
      { name: "Python", icon: "logos:python" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "SQLite", icon: "devicon:sqlite" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Vitest", icon: "logos:vitest" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
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
] as const
