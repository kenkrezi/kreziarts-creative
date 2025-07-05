
import { Project } from "@/types";
import { projectImages } from "./images";

export const projects: Project[] = [
  {
    id: 1,
    title: "Your Poster Title",
    category: "poster",
    description: "Add your poster description here - what concept, style, or message does it convey?",
    image: projectImages.poster1,
    tags: ["Typography", "Digital Art", "Branding"],
    year: "2024"
  },
  {
    id: 2,
    title: "Your Web/App Design Title",
    category: "web",
    description: "Describe your web or app design project - what problem does it solve, what's the user experience like?",
    image: projectImages.web1,
    tags: ["React", "UI/UX", "Design System"],
    year: "2024",
    link: "#" // Replace with your actual project URL
  },
  {
    id: 3,
    title: "Your Short Film Title",
    category: "film",
    description: "Describe your short film - what's the story, style, or message? What techniques did you use?",
    image: projectImages.film1,
    tags: ["Cinematography", "Editing", "Storytelling"],
    year: "2023",
    videoUrl: "#" // Replace with your actual video URL (YouTube, Vimeo, etc.)
  },
  {
    id: 4,
    title: "Another Poster Design",
    category: "poster",
    description: "Description of your second poster project...",
    image: projectImages.poster2,
    tags: ["Minimalism", "Concept", "Print"],
    year: "2023"
  },
  {
    id: 5,
    title: "Another Web/App Project",
    category: "web",
    description: "Description of your second web/app design project...",
    image: projectImages.web2,
    tags: ["Mobile Design", "Responsive", "User Research"],
    year: "2024",
    link: "#" // Replace with your actual project URL
  },
  {
    id: 6,
    title: "Another Short Film",
    category: "film",
    description: "Description of your second short film project...",
    image: projectImages.film2,
    tags: ["Documentary", "Color Grading", "Sound Design"],
    year: "2023",
    videoUrl: "#" // Replace with your actual video URL
  }
];
