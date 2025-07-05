
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
    title: "Wags & Whiskers Pet Store",
    category: "web",
    description: "Vibrant e-commerce website for pet products featuring playful design with adorable pet imagery. Designed with bright green accents and user-friendly navigation for pet owners.",
    image: projectImages.wagsWhiskers,
    tags: ["E-commerce", "Pet Industry", "UI/UX", "Brand Design"],
    year: "2024",
    link: "#" // Replace with your actual project URL when available
  },
  {
    id: 4,
    title: "Cypher Knit Fashion Poster",
    category: "poster",
    description: "A bold fashion poster combining gothic aesthetics with futuristic techwear elements. Features striking typography and rebellious underground fashion styling with cyberpunk influences.",
    image: projectImages.cypherKnit,
    tags: ["Fashion Design", "Cyberpunk", "Typography", "Digital Art", "Brand Identity"],
    year: "2024"
  },
  {
    id: 5,
    title: "Falcon of Darkness",
    category: "poster",
    description: "Dark fantasy poster design for 'Femto Feito' featuring gothic typography and mysterious hooded figure. Created with dramatic contrast and symbolic elements representing the duality of light and darkness.",
    image: projectImages.falconDarkness,
    tags: ["Dark Fantasy", "Gothic Design", "Typography", "Digital Art", "Poster Design"],
    year: "2024"
  },
  {
    id: 6,
    title: "Creative Showcase Film",
    category: "film",
    description: "A dynamic short film showcasing creative process and artistic vision through visual storytelling and contemporary cinematography techniques.",
    image: projectImages.film1,
    tags: ["Cinematography", "Creative Process", "Visual Storytelling", "Short Film"],
    year: "2024",
    videoUrl: "https://vm.tiktok.com/ZMSVXqYaD/" // Your TikTok video
  }
];
