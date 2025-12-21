import { type TechnologyProps } from "../../components/ui/Technology"
import AnimalClassifierApp from "../images/animal-classifier-app.png"
import ArduinoSonarRover from "../images/arduino-sonar-rover.jpg"

const projectsData = [
  {
    title: "Animal Classifier App",
    codeLink: "https://github.com/richyizhao/project-care",
    description:
      "Desktop AI app for analysing wildlife images and identifying individual animals. It features batch processing, species AI models, and identification results for streamlined conservation work.",
    features: [
      "Batch image processing for multiple images at once",
      "Species-specific AI model selection",
      "Exportable identification results",
      "Keyboard shortcuts for faster workflow",
    ],
    technology: [
      { name: "Electron", icon: "logos:electron" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Python", icon: "logos:python" },
      { name: "PyTorch", icon: "devicon:pytorch" },
    ] as TechnologyProps[],
    image: AnimalClassifierApp,
  },
  {
    title: "Arduino Sonar Rover",
    codeLink: "https://github.com/richyizhao/bluetooth-arduino-robot",
    description:
      "Autonomous rover designed for obstacle detection and remote-controlled movement. It features an ultrasonic scanning system, and motor driver control for robotics experimentation.",
    features: [
      "Automated distance reporting using sweep-based servo scanning",
      "Bluetooth control with dual gearbox motors and L298N controller",
    ],
    technology: [
      { name: "Arduino IDE", icon: "skill-icons:arduino" },
      { name: "C/C++", icon: "devicon:cplusplus" },
    ] as TechnologyProps[],
    image: ArduinoSonarRover,
  },
]

export default projectsData
