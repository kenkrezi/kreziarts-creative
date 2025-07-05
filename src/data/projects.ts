
import { Project } from "@/types";
import { projectImages } from "./images";

export const projects: Project[] = [
  {
    id: 1,
    title: "Golden Lotus Restaurant",
    category: "web",
    description: "An elegant restaurant website design featuring sophisticated navigation and rich food photography. Created a complete dining experience with menu integration, reservation system, and wine pairing suggestions.",
    image: projectImages.goldenLotus,
    tags: ["Restaurant Design", "UI/UX", "Web Development", "Food Photography"],
    year: "2024",
    link: "#" // Replace with your actual project URL when available
  },
  {
    id: 2,
    title: "Gaming Dashboard App",
    category: "web",
    description: "Mobile-first gaming companion app with rank tracking, statistics, and social features. Features a modern dark UI with gamification elements and real-time data visualization.",
    image: projectImages.gamingApp,
    tags: ["Mobile UI", "Gaming", "Dashboard", "React Native", "Dark Theme"],
    year: "2024",
    link: "#" // Replace with your actual project URL when available
  },
  {
    id: 3,
    title: "Cypher Knit Fashion Poster",
    category: "poster",
    description: "A bold fashion poster combining gothic aesthetics with futuristic techwear elements. Features striking typography and rebellious underground fashion styling with cyberpunk influences.",
    image: projectImages.cypherKnit,
    tags: ["Fashion Design", "Cyberpunk", "Typography", "Digital Art", "Brand Identity"],
    year: "2024"
  },
  {
    id: 4,
    title: "Your Next Poster Design",
    category: "poster",
    description: "Add description of your next poster project here...",
    image: projectImages.poster2,
    tags: ["Typography", "Branding", "Print Design"],
    year: "2024"
  },
  {
    id: 5,
    title: "Your Next Web/App Project",
    category: "web",
    description: "Add description of your next web or app design project here...",
    image: projectImages.web2,
    tags: ["React", "UI/UX", "Responsive Design"],
    year: "2024",
    link: "#" // Replace with your actual project URL
  },
  {
    id: 6,
    title: "Your Short Film Project",
    category: "film",
    description: "Add description of your short film project - story, style, techniques used...",
    image: projectImages.film1,
    tags: ["Cinematography", "Editing", "Storytelling"],
    year: "2024",
    videoUrl: "#" // Replace with your actual video URL (YouTube, Vimeo, etc.)
  }
];
