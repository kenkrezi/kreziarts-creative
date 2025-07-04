
export interface Project {
  id: number;
  title: string;
  category: "poster" | "web" | "film";
  description: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
  videoUrl?: string;
  gallery?: string[];
}
